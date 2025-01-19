import { useRef, useEffect } from 'react';
import { CreationCard } from './CreationCard';

export const CreationGrid = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (
        e.target instanceof HTMLElement && 
        (e.target.tagName === 'TEXTAREA' || 
         e.target.closest('.max-h-24'))
      ) {
        return;
      }

      e.preventDefault();
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      className="flex overflow-x-auto pb-4 space-x-4 scrollbar-thin scrollbar-thumb-smolder-border scrollbar-track-smolder-muted hover:scrollbar-thumb-smolder-accent/50"
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <CreationCard key={item} index={item} />
      ))}
    </div>
  );
};