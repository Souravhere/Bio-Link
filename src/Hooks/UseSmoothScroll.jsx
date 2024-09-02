import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const useSmoothScroll = () => {
  const lenisRef = useRef(null); // Create a ref to hold the Lenis instance

  useEffect(() => {
    // Initialize Lenis with improved settings
    lenisRef.current = new Lenis({
      duration: 1.2, // Duration for smooth scrolling
      easing: (t) => t * (2 - t), // Smooth easing function
      smooth: true, // Enable smooth scrolling
    });

    // Function to update Lenis on each animation frame
    const onAnimationFrame = (time) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(onAnimationFrame);
    };

    // Start the animation frame loop
    requestAnimationFrame(onAnimationFrame);

    // Clean up on component unmount
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  // Remove the resize event listener if `update` is not supported
};

export default useSmoothScroll;
