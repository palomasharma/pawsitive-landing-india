
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    toast({
      title: "Success!",
      description: `Thank you for joining! We'll keep you updated on ${email}.`,
      className: "bg-secondary-green text-foreground",
    });
    setEmail('');
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
