
import { useState, useRef, useEffect, useCallback } from 'react';
import { lineupArtists } from '../data/lineupArtists';

export const useLineupCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextArtist = () => {
    setCurrentIndex(prev => (prev + 1) % lineupArtists.length);
  };

  const prevArtist = () => {
    setCurrentIndex(prev => (prev - 1 + lineupArtists.length) % lineupArtists.length);
  };

  // Get artists to display in the carousel with infinite scroll effect
  const getVisibleArtists = () => {
    const items = [];
    const totalItems = lineupArtists.length;
    
    // Always show 5 items: 2 before, 1 center, 2 after
    for (let i = -2; i <= 2; i++) {
      let index = (currentIndex + i + totalItems) % totalItems;
      items.push({
        ...lineupArtists[index],
        index,
        position: i
      });
    }
    
    return items;
  };

  // Auto-rotate every 4 seconds with pause on hover
  useEffect(() => {
    if (isHovered || isTransitioning) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % lineupArtists.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [currentIndex, isHovered, isTransitioning]);
  
  const scrollToItem = useCallback((index: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const itemWidth = container.offsetWidth / 5; // Always 5 items visible
    const scrollLeft = (index - 2) * itemWidth + (container.offsetWidth - itemWidth) / 2;
    
    setIsTransitioning(true);
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextArtist();
      else if (e.key === 'ArrowLeft') prevArtist();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return {
    currentIndex,
    setCurrentIndex,
    containerRef,
    itemRefs,
    isHovered,
    setIsHovered,
    nextArtist,
    prevArtist,
    getVisibleArtists,
    scrollToItem
  };
};
