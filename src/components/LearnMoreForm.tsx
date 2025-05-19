
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { DialogClose } from '@/components/ui/dialog'; // To close dialog on submit

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  interest: z.string().optional(),
});

type LearnMoreFormValues = z.infer<typeof formSchema>;

const LearnMoreForm = () => {
  const { toast } = useToast();
  const form = useForm<LearnMoreFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
    },
  });

  const onSubmit = async (data: LearnMoreFormValues) => {
    // For now, we'll just log to console and show a toast.
    // In a real scenario, you'd send this data to your backend (e.g., Supabase).
    console.log("Learn More Form Submitted:", data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Thank You!",
      description: `We've received your interest, ${data.name}. We'll be in touch!`,
      className: "bg-secondary-green text-foreground",
    });
    form.reset();
    // We might need a way to programmatically close the dialog here.
    // For now, we can add a close button or rely on DialogClose in the footer.
    // Let's add a DialogClose to the submit button to automatically close it.
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground dark:text-gray-200">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} className="bg-input dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground dark:text-gray-200">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} className="bg-input dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground dark:text-gray-200">What are you most interested in? (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., Online vet consultations, community features..."
                  className="resize-none bg-input dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end space-x-2 pt-2">
            <DialogClose asChild>
                <Button type="button" variant="outline">
                    Cancel
                </Button>
            </DialogClose>
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Submitting..." : "Submit Interest"}
            </Button>
        </div>
      </form>
    </Form>
  );
};

export default LearnMoreForm;
