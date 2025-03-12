
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import BlurredBackground from '@/components/ui/BlurredBackground';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Headphones, PhoneCall, Video, Calendar, Languages, Clock } from 'lucide-react';

const InterpreterCalls = () => {
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
                  <Headphones className="mr-1 h-4 w-4" />
                  Interpreter Calls
                </span>
              </div>
              
              <h1 className="mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                Connect directly with professional interpreters
              </h1>
              
              <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-600">
                Get instant access to qualified interpreters for your voice or video calls, whenever you need them.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-fade-in">
              <div className="glass-panel rounded-xl overflow-hidden p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <PhoneCall className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Voice Calls</h3>
                <p className="text-gray-600">
                  Connect with interpreters over voice calls for real-time translation services.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl overflow-hidden p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Video Calls</h3>
                <p className="text-gray-600">
                  Face-to-face interpretation via video for more nuanced communication.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl overflow-hidden p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Scheduled Sessions</h3>
                <p className="text-gray-600">
                  Book interpreters in advance for important meetings or events.
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
                How Interpreter Calls Work
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Connect with qualified interpreters in just a few simple steps.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl">
              <dl className="grid max-w-xl grid-cols-1 gap-y-10">
                {[
                  {
                    title: "Describe Your Needs",
                    description: "Tell us what type of interpreter you need (e.g., medical, legal, general) and your preferred language.",
                    number: "01"
                  },
                  {
                    title: "Connect with Interpreters",
                    description: "Our system quickly matches you with available interpreters that meet your criteria.",
                    number: "02"
                  },
                  {
                    title: "Start Your Session",
                    description: "Begin your voice or video call with the interpreter and communicate effectively.",
                    number: "03"
                  },
                  {
                    title: "Pay Only for What You Use",
                    description: "You'll only be charged for the time you actually use, down to the minute.",
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
        
        {/* Request Form Preview */}
        <BlurredBackground className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Ready to connect with an interpreter?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Fill out a quick form and we'll connect you with the right interpreter in minutes.
                </p>
                <div className="mt-8">
                  <AnimatedButton className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
                    Request an Interpreter Now
                  </AnimatedButton>
                </div>
              </div>
              
              <div className="mt-10 lg:mt-0 lg:flex-shrink-0">
                <div className="glass-panel rounded-xl overflow-hidden p-6 w-full max-w-md mx-auto lg:mx-0">
                  <h3 className="text-xl font-medium mb-4">Request an Interpreter</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Interpretation Type
                      </label>
                      <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option>Medical</option>
                        <option>Legal</option>
                        <option>Business</option>
                        <option>Technical</option>
                        <option>General</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Languages
                      </label>
                      <div className="flex gap-2">
                        <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>Chinese</option>
                          <option>Arabic</option>
                        </select>
                        <div className="flex items-center">
                          <Languages className="h-5 w-5 text-gray-400" />
                        </div>
                        <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                          <option>Spanish</option>
                          <option>English</option>
                          <option>French</option>
                          <option>Chinese</option>
                          <option>Arabic</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Communication Method
                      </label>
                      <div className="flex gap-4">
                        <div className="flex items-center">
                          <input
                            id="voice"
                            name="communication-method"
                            type="radio"
                            defaultChecked
                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <label htmlFor="voice" className="ml-2 block text-sm text-gray-700">
                            Voice
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="video"
                            name="communication-method"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <label htmlFor="video" className="ml-2 block text-sm text-gray-700">
                            Video
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        When
                      </label>
                      <div className="flex gap-4">
                        <div className="flex items-center">
                          <input
                            id="now"
                            name="when"
                            type="radio"
                            defaultChecked
                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <label htmlFor="now" className="ml-2 block text-sm text-gray-700">
                            Now
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="schedule"
                            name="when"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <label htmlFor="schedule" className="ml-2 block text-sm text-gray-700">
                            Schedule
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <AnimatedButton className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
                      Find Interpreter
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurredBackground>
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

export default InterpreterCalls;
