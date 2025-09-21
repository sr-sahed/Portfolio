import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <Button
        onClick={scrollToTop}
        size="sm"
        variant="outline"
        className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-background/80 backdrop-blur-sm"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ScrollToTop;