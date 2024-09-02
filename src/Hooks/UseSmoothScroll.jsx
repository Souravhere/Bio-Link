// hooks/useSmoothScroll.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useSmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis with improved settings
    const lenis = new Lenis({
      duration: 1.2, // Duration for smooth scrolling
      easing: (t) => t * (2 - t), // Smooth easing function
      smooth: true, // Enable smooth scrolling
    });

    // Function to update Lenis on each animation frame
    const onAnimationFrame = (time) => {
      lenis.raf(time);
      requestAnimationFrame(onAnimationFrame);
    };

    // Start the animation frame loop
    requestAnimationFrame(onAnimationFrame);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Handle potential resize events
    const handleResize = () => {
      // Trigger Lenis update on resize
      lenis.update();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

};

export default useSmoothScroll;
