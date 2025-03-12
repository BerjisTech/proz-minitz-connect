
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
  iconClassName?: string;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  href,
  className,
  iconClassName,
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "service-card flex flex-col h-full bg-white/80 backdrop-blur-md p-6",
        className
      )}
    >
      <div className="flex-1 flex flex-col">
        <div className={cn(
          "mb-5 rounded-full w-12 h-12 flex items-center justify-center bg-blue-50",
          iconClassName
        )}>
          <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mt-auto">
          <Link to={href}>
            <AnimatedButton variant="outline" className="w-full">
              Learn More
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
