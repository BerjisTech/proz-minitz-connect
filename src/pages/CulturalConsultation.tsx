
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import BlurredBackground from '@/components/ui/BlurredBackground';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Globe, Users, MapPin, MessageCircle, Briefcase, Coffee } from 'lucide-react';

const CulturalConsultation = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <BlurredBackground className="pt-16 lg:pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
                  <Globe className="mr-1 h-4 w-4" />
                  Cultural Consultation
                </span>
              </div>
              
              <h1 className="mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                Connect with local cultural experts
              </h1>
              
              <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-600">
                Get authentic insights and practical advice from locals with deep cultural knowledge.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-fade-in">
              <div className="glass-panel rounded-xl overflow-hidden p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Business Insights</h3>
                <p className="text-gray-600">
                  Learn about local business customs, etiquette, and negotiation strategies.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl overflow-hidden p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Travel Planning</h3>
                <p className="text-gray-600">
                  Get insider tips on destinations, hidden gems, and local customs.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl overflow-hidden p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Local Lifestyle</h3>
                <p className="text-gray-600">
                  Understand daily life, traditions, social norms, and cultural nuances.
                </p>
              </div>
            </div>
          </div>
        </BlurredBackground>
        
        {/* How It Works Section */}
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-12">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Simple Process
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Cultural Consultation Works
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Connect with local experts in just a few simple steps.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl">
              <dl className="grid max-w-xl grid-cols-1 gap-y-10">
                {[
                  {
                    title: "Choose Your Destination",
                    description: "Select the country or culture you want to learn more about.",
                    number: "01"
                  },
                  {
                    title: "Select a Consultant",
                    description: "Browse profiles of local cultural experts and choose one that matches your needs.",
                    number: "02"
                  },
                  {
                    title: "Discuss Your Questions",
                    description: "Connect in real-time and get personalized insights and advice.",
                    number: "03"
                  },
                  {
                    title: "Pay Only for What You Need",
                    description: "Pay by the minute with no minimum requirements or subscriptions.",
                    number: "04"
                  }
                ].map((step) => (
                  <div key={step.title} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white">
                        {step.number}
                      </div>
                      {step.title}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        
        {/* Featured Regions */}
        <BlurredBackground className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-12">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Global Coverage
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Featured Regions
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Explore popular destinations with our network of local cultural consultants.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  region: "East Asia",
                  countries: ["Japan", "China", "South Korea", "Taiwan"],
                  consultants: 145,
                  image: "https://placehold.co/800x600/e2e8f0/1e293b?text=East+Asia"
                },
                {
                  region: "Europe",
                  countries: ["France", "Italy", "Germany", "Spain", "UK"],
                  consultants: 203,
                  image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Europe"
                },
                {
                  region: "Latin America",
                  countries: ["Mexico", "Brazil", "Argentina", "Colombia"],
                  consultants: 118,
                  image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Latin+America"
                },
                {
                  region: "Middle East",
                  countries: ["UAE", "Saudi Arabia", "Qatar", "Turkey"],
                  consultants: 87,
                  image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Middle+East"
                },
                {
                  region: "Africa",
                  countries: ["South Africa", "Kenya", "Nigeria", "Egypt"],
                  consultants: 92,
                  image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Africa"
                },
                {
                  region: "South Asia",
                  countries: ["India", "Thailand", "Vietnam", "Singapore"],
                  consultants: 129,
                  image: "https://placehold.co/800x600/e2e8f0/1e293b?text=South+Asia"
                }
              ].map((region) => (
                <div key={region.region} className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <img 
                    src={region.image} 
                    alt={region.region} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">{region.region}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {region.countries.join(", ")}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        <Users className="h-4 w-4 inline mr-1" />
                        {region.consultants} consultants
                      </span>
                      <AnimatedButton size="sm" variant="outline">
                        Explore
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurredBackground>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to explore a new culture?
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
                Connect with a cultural consultant today and get the insights you need.
              </p>
              <div className="mt-10">
                <AnimatedButton
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Find a Consultant
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

export default CulturalConsultation;
