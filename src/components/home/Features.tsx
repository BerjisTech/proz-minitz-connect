
import React, { useEffect, useRef } from 'react';
import { Check, Clock, Globe, Headphones, Users } from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      name: 'Real-time Availability',
      description: 'Connect with available interpreters, tutors, and cultural consultants immediately.',
      icon: Clock,
    },
    {
      name: 'Global Network',
      description: 'Access professionals from around the world covering numerous languages and cultures.',
      icon: Globe,
    },
    {
      name: 'Quality Assurance',
      description: 'All professionals are vetted and rated to ensure high-quality service.',
      icon: Check,
    },
    {
      name: 'Specialized Knowledge',
      description: 'Find interpreters with expertise in medical, legal, technical, and other specialized fields.',
      icon: Headphones,
    },
    {
      name: 'Cultural Expertise',
      description: 'Learn from locals with deep cultural knowledge and practical insights.',
      icon: Users,
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Enhanced Communication
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for seamless language services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Proz Minitz offers a comprehensive suite of language and cultural services designed to break down communication barriers.
          </p>
        </div>
        <div 
          ref={featuresRef}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none opacity-0"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {features.slice(0, 3).map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <dl className="mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.slice(3).map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
