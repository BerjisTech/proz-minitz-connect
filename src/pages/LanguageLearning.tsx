
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import BlurredBackground from '@/components/ui/BlurredBackground';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Book, GraduationCap, Languages, Clock, Users, MessageCircle } from 'lucide-react';

const LanguageLearning = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const popularLanguages = [
    { name: "Spanish", tutors: 124, color: "bg-blue-100" },
    { name: "French", tutors: 98, color: "bg-green-100" },
    { name: "Mandarin", tutors: 86, color: "bg-yellow-100" },
    { name: "Japanese", tutors: 72, color: "bg-purple-100" },
    { name: "German", tutors: 65, color: "bg-pink-100" },
    { name: "Italian", tutors: 59, color: "bg-indigo-100" },
  ];

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
                  <GraduationCap className="mr-1 h-4 w-4" />
                  Language Learning
                </span>
              </div>
              
              <h1 className="mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                Learn a new language with professional tutors
              </h1>
              
              <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-600">
                Get personalized language lessons from expert tutors, paying only for the time you use.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-fade-in">
              <div className="glass-panel rounded-xl overflow-hidden p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <Languages className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Conversational Practice</h3>
                <p className="text-gray-600">
                  Practice speaking with native speakers and improve your fluency.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl overflow-hidden p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Structured Lessons</h3>
                <p className="text-gray-600">
                  Follow a curriculum designed to help you progress systematically.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl overflow-hidden p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Learn when it's convenient for you with our on-demand tutoring.
                </p>
              </div>
            </div>
          </div>
        </BlurredBackground>
        
        {/* Popular Languages Section */}
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-12">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Languages
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Popular Languages to Learn
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Choose from over 50 languages with expert tutors ready to help you learn.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {popularLanguages.map((language) => (
                <div 
                  key={language.name}
                  className={`${language.color} rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
                >
                  <h3 className="font-medium text-gray-900">{language.name}</h3>
                  <p className="text-sm text-gray-700">{language.tutors} tutors</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <AnimatedButton variant="outline">
                View All Languages
              </AnimatedButton>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <BlurredBackground className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-12">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Simple Process
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Language Learning Works
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Start learning a new language in just a few simple steps.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl">
              <dl className="grid max-w-xl grid-cols-1 gap-y-10">
                {[
                  {
                    title: "Choose Your Language",
                    description: "Select the language you want to learn from our extensive list.",
                    number: "01"
                  },
                  {
                    title: "Find a Tutor",
                    description: "Browse profiles of qualified tutors and find one that matches your learning style.",
                    number: "02"
                  },
                  {
                    title: "Start Learning",
                    description: "Begin your one-on-one session with your tutor and start improving your language skills.",
                    number: "03"
                  },
                  {
                    title: "Pay As You Go",
                    description: "Only pay for the time you spend with your tutor, with no minimum commitments.",
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
        </BlurredBackground>
        
        {/* Featured Tutors */}
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-12">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Expert Instructors
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet Some of Our Tutors
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Learn from certified language instructors with years of teaching experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Maria Rodriguez",
                  language: "Spanish",
                  location: "Madrid, Spain",
                  availability: "Online Now",
                  rating: 4.9,
                  image: "https://placehold.co/200x200/e2e8f0/1e293b?text=MR"
                },
                {
                  name: "Jean Dupont",
                  language: "French",
                  location: "Paris, France",
                  availability: "Available Today",
                  rating: 4.8,
                  image: "https://placehold.co/200x200/e2e8f0/1e293b?text=JD"
                },
                {
                  name: "Yuki Tanaka",
                  language: "Japanese",
                  location: "Tokyo, Japan",
                  availability: "Online Now",
                  rating: 5.0,
                  image: "https://placehold.co/200x200/e2e8f0/1e293b?text=YT"
                }
              ].map((tutor) => (
                <div key={tutor.name} className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="p-4">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={tutor.image} 
                        alt={tutor.name} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{tutor.name}</h3>
                        <p className="text-sm text-gray-600">{tutor.language} Tutor</p>
                        <p className="text-sm text-gray-600">{tutor.location}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex items-center">
                            {Array(5).fill(0).map((_, i) => (
                              <svg 
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(tutor.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="ml-1 text-sm text-gray-600">{tutor.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tutor.availability.includes("Online") ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
                          <span className={`h-2 w-2 rounded-full ${tutor.availability.includes("Online") ? "bg-green-400" : "bg-blue-400"} mr-1`}></span>
                          {tutor.availability}
                        </span>
                      </div>
                      <AnimatedButton size="sm" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Contact
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <AnimatedButton className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
                Find a Tutor Now
              </AnimatedButton>
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

export default LanguageLearning;
