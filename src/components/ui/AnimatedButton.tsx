
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'primary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children: React.ReactNode;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <Button
        className={cn(
          'relative overflow-hidden transition-all duration-300 ease-out',
          'after:absolute after:inset-0 after:rounded-[inherit] after:bg-white/10 after:opacity-0 after:transition-opacity hover:after:opacity-100',
          'transform hover:translate-y-[-3px] hover:shadow-lg active:translate-y-[0px]',
          className
        )}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </Button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export default AnimatedButton;
