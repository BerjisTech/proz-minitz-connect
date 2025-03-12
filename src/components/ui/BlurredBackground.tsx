
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurredBackgroundProps {
  className?: string;
  children: React.ReactNode;
}

const BlurredBackground = ({ className, children }: BlurredBackgroundProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden",
      className
    )}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-50">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: "4s" }}></div>
        </div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BlurredBackground;
