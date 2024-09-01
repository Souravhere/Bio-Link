// hooks/useSmoothScroll.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration for smoother or quicker scroll
      easing: (t) => t, // Optional easing function
      smooth: true, // Enable smooth scrolling
    });

    // Update Lenis on each animation frame
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;
