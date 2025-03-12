
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import { Headphones, Languages, Users } from 'lucide-react';
import ServiceCard from '@/components/home/ServiceCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import BlurredBackground from '@/components/ui/BlurredBackground';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const services = [
    {
      title: "Interpreter Calls",
      description: "Connect directly with interpreters over voice or video calls for real-time translation services.",
      icon: Headphones,
      href: "/interpreter-calls",
    },
    {
      title: "Language Learning",
      description: "Get personalized language tutoring from professional instructors. Pay only for the time you use.",
      icon: Languages,
      href: "/language-learning",
    },
    {
      title: "Cultural Consultation",
      description: "Connect with local experts who provide valuable insights on cultures around the world.",
      icon: Users,
      href: "/cultural-consultation",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <Hero />
        
        {/* Features section */}
        <Features />
        
        {/* Services Section */}
        <BlurredBackground className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
                Explore our comprehensive suite of language and cultural services designed to connect you with professionals worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 staggered-fade-in">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                />
              ))}
            </div>
          </div>
        </BlurredBackground>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to connect?
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
                Start using Proz Minitz today for seamless language and cultural services.
              </p>
              <div className="mt-10">
                <AnimatedButton
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Get Started
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <h3 className="text-xl font-semibold">Proz Minitz</h3>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center text-base text-gray-500">
                &copy; {new Date().getFullYear()} Proz Minitz. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
