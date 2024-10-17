'use client'
import { useState, useEffect } from 'react';

export default function TopScrol() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 300; // Het scrollpunt waarop het element zichtbaar wordt

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Verwijder de event listener bij unmounten
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-50 bg-red text-foreground p-4 pb-3 w-16 h-16 rounded-full uppercase transition ease-in-out duration-300 ${isVisible ? 'fixed' : 'hidden'}`}
      >
        <span className="material-symbols-outlined">
          arrow_upward
        </span>
      </button>
    </>
  );
}