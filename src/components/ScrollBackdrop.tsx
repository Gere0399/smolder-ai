import { useEffect, useState } from "react";

export const ScrollBackdrop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 h-24 transition-all duration-300 z-10 
        ${isScrolled ? 'bg-black/40 backdrop-blur-xl' : ''}`} 
    />
  );
};