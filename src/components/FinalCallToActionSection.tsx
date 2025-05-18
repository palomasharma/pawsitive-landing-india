
import React from 'react';
import EmailCaptureForm from './EmailCaptureForm';

const FinalCallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in-up">
          Don't Miss Out on HappyPaws!
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Be the first to experience the future of pet care in India. Join our waitlist for exclusive updates, early access, and special launch offers.
        </p>
        <div className="animate-fade-in-up flex justify-center" style={{ animationDelay: '0.2s' }}>
          <EmailCaptureForm 
            ctaText="Secure Your Spot!" 
            placeholderText="Your best email for updates"
            className="bg-primary-soft/20 p-4 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCallToActionSection;
