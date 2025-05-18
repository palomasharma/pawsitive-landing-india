
import React from 'react';
import { ShieldCheck, CalendarDays, MessageSquareText, Users, PlusCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted Vets Online",
    description: "Connect with certified veterinarians for consultations anytime, anywhere.",
    color: "text-primary",
    bgColor: "bg-primary-soft",
  },
  {
    icon: CalendarDays,
    title: "Health Reminders",
    description: "Never miss a vaccination or check-up with smart health reminders.",
    color: "text-accent-blue",
    bgColor: "bg-secondary-blue/50",
  },
  {
    icon: MessageSquareText,
    title: "Personalized Advice",
    description: "Get tailored tips and care guides based on your pet's breed, age, and health.",
    color: "text-green-500",
    bgColor: "bg-secondary-green/70",
  },
  {
    icon: Users,
    title: "Pet Lover Community",
    description: "Share experiences, ask questions, and connect with fellow pet parents in India.",
    color: "text-pink-500",
    bgColor: "bg-secondary/70",
  },
  {
    icon: PlusCircle, // Representing medical cross for emergency
    title: "Emergency Support",
    description: "Quick access to emergency vet contacts and first-aid guidance when you need it most.",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Everything Your Pet Needs, All in One App</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            HappyPaws is designed to make pet parenting simpler, smarter, and more joyful.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up border-none bg-opacity-50 ${benefit.bgColor} dark:bg-gray-700`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="items-center text-center">
                <div className={`p-4 rounded-full inline-block mb-4 ${benefit.bgColor}`}>
                  <benefit.icon className={`w-10 h-10 ${benefit.color}`} strokeWidth={1.5} />
                </div>
                <CardTitle className={`text-xl font-semibold ${benefit.color}`}>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground dark:text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
