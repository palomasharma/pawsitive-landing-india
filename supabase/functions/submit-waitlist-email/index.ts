
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Define CORS headers to allow requests from your frontend
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Replace '*' with your frontend's domain in production for better security
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string' || !/\S+@\S+\.\S+/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address provided.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }

    // Create a Supabase client.
    // SUPABASE_URL and SUPABASE_ANON_KEY are automatically available in Supabase Edge Functions.
    const supabaseClient: SupabaseClient = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      // Pass the Authorization header from the client to the Edge Function
      // to perform operations on behalf of the user if needed, or use service_role for admin tasks.
      // For public forms inserting with anon key, RLS policies on the table are key.
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    // Insert the email into the 'waitlist_entries' table
    const { data, error } = await supabaseClient
      .from('waitlist_entries')
      .insert({ email: email })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      // Handle unique constraint violation (PostgreSQL error code 23505)
      if (error.code === '23505') {
         return new Response(JSON.stringify({ error: 'This email is already on the waitlist.' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 409, // Conflict
        })
      }
      return new Response(JSON.stringify({ error: error.message || 'Failed to save email to database.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      })
    }

    return new Response(JSON.stringify({ message: 'Email saved successfully!', entry: data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (e) {
    console.error('Function error:', e)
    return new Response(JSON.stringify({ error: e.message || 'An unexpected error occurred.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
