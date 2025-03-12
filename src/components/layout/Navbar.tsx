
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Globe, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Interpreter Calls', href: '/interpreter-calls' },
    { name: 'Language Learning', href: '/language-learning' },
    { name: 'Cultural Consultation', href: '/cultural-consultation' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        {
          'bg-white/80 backdrop-blur-lg shadow-sm': isScrolled,
          'bg-transparent': !isScrolled
        }
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-semibold tracking-tight"
            >
              <Globe className="h-6 w-6 text-blue-500" />
              <span className="bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 text-transparent">
                Proz Minitz
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  'hover:text-blue-600',
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-700'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              Log in
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
          {
            'max-h-96 opacity-100': isMobileMenuOpen,
            'max-h-0 opacity-0': !isMobileMenuOpen
          }
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-lg sm:px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium',
                location.pathname === item.href
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="block w-full text-center mt-3 px-4 py-2 rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
