import React, { useRef, useEffect } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineDesignServices, MdOutlineTextSnippet } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FaRegImages } from 'react-icons/fa';

const Textscroll = () => {
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 2; // Adjust this value for speed control

  useEffect(() => {
    const container = scrollContainerRef.current;

    // Clone the content to create an infinite scroll effect
    const cloneContent = () => {
      const content = container.children;
      const contentArray = Array.from(content);
      const clone = contentArray.map((child) => child.cloneNode(true));
      return [...contentArray, ...clone];
    };

    const setupScroll = () => {
      const newContent = cloneContent();
      container.innerHTML = '';
      newContent.forEach((item) => container.appendChild(item));
    };

    const animateScroll = () => {
      container.scrollLeft += scrollSpeed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      requestAnimationFrame(animateScroll);
    };

    setupScroll();
    animateScroll();

    return () => cancelAnimationFrame(animateScroll);
  }, [scrollSpeed]);

  return (
    <div className="overflow-hidden px-0 w-full py-4 text-white text-xl uppercase font-semibold bg-indigo-500">
      <div
        ref={scrollContainerRef}
        className="flex space-x-8 whitespace-nowrap"
        style={{
          display: 'flex',
          overflowX: 'hidden',
          whiteSpace: 'nowrap',
          scrollBehavior: 'smooth',
          width: '100%',
        }}
      >
        {/* Original content */}
        <div className="flex-shrink-0 flex items-center">
          <CgWebsite size={24} className="mr-2" />
          <span>Website</span>
        </div>
        <div className="flex-shrink-0 flex items-center">
          <MdOutlineDesignServices size={24} className="mr-2" />
          <span>Graphics Design</span>
        </div>
        <div className="flex-shrink-0 flex items-center">
          <IoShareSocialOutline size={24} className="mr-2" />
          <span>Social Handles</span>
        </div>
        <div className="flex-shrink-0 flex items-center">
          <FaRegImages size={24} className="mr-2" />
          <span>Poster Making</span>
        </div>
        <div className="flex-shrink-0 flex items-center">
          <MdOutlineTextSnippet size={24} className="mr-2" />
          <span>Content Writing</span>
        </div>
      </div>
    </div>
  );
};

export default Textscroll;
