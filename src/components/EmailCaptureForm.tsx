import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client'; // Import the supabase client

interface EmailCaptureFormProps {
  ctaText?: string;
  placeholderText?: string;
  className?: string;
}

const EmailCaptureForm: React.FC<EmailCaptureFormProps> = ({
  ctaText = "Join the Waitlist!",
  placeholderText = "Enter your email",
  className = "",
}) => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Use supabaseUrl and supabaseKey from the imported client
    const supabaseUrl = supabase.supabaseUrl;
    const supabaseAnonKey = supabase.supabaseKey;

    if (!supabaseUrl || !supabaseAnonKey) {
      // This check might be less critical now as these values come from a configured client
      // but it's good for robustness if the client itself wasn't initialized (though it should be).
      console.error("Supabase URL or Anon Key is not available from the Supabase client.");
      toast({
        title: "Configuration Error",
        description: "Unable to connect to backend. Please check configuration.",
        variant: "destructive",
      });
      return;
    }

    // The name of your Edge Function
    const functionName = 'submit-waitlist-email';
    const functionUrl = `${supabaseUrl}/functions/v1/${functionName}`;

    try {
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseAnonKey, // Supabase Edge Functions expect the anon key via apikey header
          'Authorization': `Bearer ${supabaseAnonKey}`, // Standard for Supabase
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast({
          title: "Submission Failed",
          description: result.error || "An error occurred. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Success!",
        description: `Thank you for joining! We'll keep you updated at ${email}.`,
        className: "bg-secondary-green text-foreground",
      });
      setEmail('');
    } catch (error) {
      console.error("Error submitting email:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred while submitting your email. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${className}`}>
      <div className="relative flex-grow">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="email"
          placeholder={placeholderText}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 py-3 h-12 text-base bg-white dark:bg-gray-800 border-gray-300 focus:ring-primary focus:border-primary"
          aria-label="Email address"
        />
      </div>
      <Button type="submit" className="bg-accent hover:bg-orange-600 text-accent-foreground font-semibold py-3 h-12 text-base px-6 sm:px-8 transition-colors duration-300 ease-in-out transform hover:scale-105" size="lg">
        {ctaText}
      </Button>
    </form>
  );
};

export default EmailCaptureForm;
