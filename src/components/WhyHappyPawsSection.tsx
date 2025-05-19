import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import LearnMoreForm from './LearnMoreForm'; // We'll create this next

const WhyHappyPawsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-soft/30 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in-up">
            <img 
              src="/lovable-uploads/844dac3d-ea79-4a2c-92c7-ca648cecbb23.png" 
              alt="Veterinarian with a cat" 
              className="rounded-xl shadow-2xl object-cover w-full"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Tailored for <span className="text-primary">Indian Pet Parents</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              We understand the unique joys and challenges of raising a pet in India. HappyPaws connects you with local resources, culturally relevant advice, and a community that gets it.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From finding pet-friendly spots in your city to understanding regional health concerns, we're building a platform with you and your furry family in mind.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-accent hover:bg-orange-600 text-accent-foreground font-semibold py-3 h-12 text-base px-8 transition-colors duration-300 ease-in-out transform hover:scale-105">
                  Sign Up to Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-background dark:bg-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-foreground dark:text-white">Learn More About HappyPaws</DialogTitle>
                  <DialogDescription className="text-muted-foreground dark:text-gray-300">
                    We're excited to have you! Fill out the form below, and we'll keep you updated.
                  </DialogDescription>
                </DialogHeader>
                <LearnMoreForm />
              </DialogContent>
            </Dialog>
             <p className="text-sm text-muted-foreground mt-3">(Full feature details coming with launch!)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHappyPawsSection;
