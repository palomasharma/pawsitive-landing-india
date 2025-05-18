
import React from 'react';
import EmailCaptureForm from './EmailCaptureForm';
import Logo from './icons/Logo';

const HeroSection = () => {
  return (
    <section className="bg-primary-soft/30 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in-up">
          <Logo className="h-12 mx-auto lg:mx-0 mb-4" textColor="text-primary" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6">
            Pawsitively <span className="text-primary">Better Care</span> for Your Best Friend
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            HappyPaws is your all-in-one companion for pet care in India. Get expert vet advice, manage health records, and connect with a loving community, all at your fingertips. Coming soon!
          </p>
          <EmailCaptureForm ctaText="Get Early Access" className="justify-center lg:justify-start" />
          <p className="text-sm text-muted-foreground mt-4">Join our waitlist and be the first to know when we launch!</p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Using a placeholder image. Replace with your actual image. */}
          <img 
            src="https://source.unsplash.com/600x500/?happy,dog,playing" 
            alt="Happy dog playing" 
            className="rounded-xl shadow-2xl object-cover w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
