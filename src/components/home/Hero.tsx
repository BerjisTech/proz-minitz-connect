
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Languages, PhoneCall, Users } from 'lucide-react';
import BlurredBackground from '../ui/BlurredBackground';
import AnimatedButton from '../ui/AnimatedButton';

const Hero = () => {
  const navigate = useNavigate();
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      name: "Interpreter Calls",
      icon: PhoneCall,
      description: "Connect directly with interpreters over voice or video",
      path: "/interpreter-calls",
      color: "bg-blue-500",
      delay: "100ms"
    },
    {
      name: "Language Learning",
      icon: Languages,
      description: "Real-time tutoring sessions with professional language experts",
      path: "/language-learning",
      color: "bg-indigo-500",
      delay: "200ms"
    },
    {
      name: "Cultural Consultation",
      icon: Users,
      description: "Connect with locals who have expert cultural knowledge",
      path: "/cultural-consultation",
      color: "bg-purple-500",
      delay: "300ms"
    }
  ];

  return (
    <BlurredBackground className="pt-24 lg:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block mb-4 opacity-0"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
              <Globe className="mr-1 h-4 w-4" />
              Connect Globally
            </span>
          </div>
          
          <h1 
            ref={el => elementsRef.current[1] = el}
            className="opacity-0 mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl"
          >
            <span className="relative whitespace-nowrap">
              <span className="relative">Real-time</span>
            </span>{" "}
            language & cultural connections
          </h1>
          
          <p 
            ref={el => elementsRef.current[2] = el}
            className="opacity-0 mt-6 mx-auto max-w-2xl text-lg text-gray-600"
          >
            Proz Minitz brings you instant access to interpreters, language tutors, and cultural consultants from around the world.
          </p>
          
          <div 
            ref={el => elementsRef.current[3] = el}
            className="opacity-0 mt-10 flex flex-wrap gap-4 justify-center"
          >
            <AnimatedButton
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0"
              onClick={() => navigate('/interpreter-calls')}
            >
              Get Started
            </AnimatedButton>
            
            <AnimatedButton
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </AnimatedButton>
          </div>
        </div>
        
        <div 
          id="services"
          ref={el => elementsRef.current[4] = el}
          className="opacity-0 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.name}
              className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: service.delay }}
            >
              <div className="p-6">
                <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mt-auto">
                  <AnimatedButton
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate(service.path)}
                  >
                    Explore
                  </AnimatedButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BlurredBackground>
  );
};

export default Hero;
