import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function OurProjects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Start the animation when 30% of the component is in view
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="w-[400px] h-[400px] flex items-center justify-center relative overflow-hidden"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Animated SVG Logo */}
      <motion.svg
        className="scale-150 mix-blend-multiply"
        width="192"
        height="192"
        viewBox="0 0 438 689"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.path
          d="M163 415.5L1 507V136.5L225 1L437.5 123.5V272.5L316.5 343L437.5 415.5V583.5L225 688L80.5 601L274 483V220.5L163 156V415.5Z"
          stroke="#5C00BE"
          strokeWidth="4"
          fill="none"
        />
        <motion.path
          d="M163 415.5L1 507V136.5L225 1L437.5 123.5V272.5L316.5 343L437.5 415.5V583.5L225 688L80.5 601L274 483V220.5L163 156V415.5Z"
          fill="#5C00BE"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        />
      </motion.svg>

      {/* Content Boxes */}
      <motion.div
        className="absolute left-2 border border-gray-400 top-16 rounded-xl p-1 backdrop-blur"
        variants={itemVariants}
      >
        <div className="flex items-center justify-evenly">
          <img className="h-12" src="https://img.icons8.com/color/400/web.png" alt="Web Development" />
          <h2 className="font-semibold">Web Development</h2>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-6 border border-gray-400 top-24 rounded-xl p-1 backdrop-blur"
        variants={itemVariants}
      >
        <div className="flex items-center justify-evenly">
          <img className="h-12" src="https://img.icons8.com/3d-fluency/750/design.png" alt="Designs" />
          <h2 className="font-semibold">Designs</h2>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-8 border border-gray-400 bottom-28 rounded-xl p-1 backdrop-blur"
        variants={itemVariants}
      >
        <div className="flex items-center justify-evenly">
          <img className="h-12" src="https://img.icons8.com/3d-fluency/750/chart.png" alt="Marketing" />
          <h2 className="font-semibold">Marketing</h2>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-12 border border-gray-400 bottom-32 rounded-xl p-1 backdrop-blur"
        variants={itemVariants}
      >
        <div className="flex items-center justify-evenly">
          <img className="h-12" src="https://img.icons8.com/color/750/bullish.png" alt="SEO" />
          <h2 className="font-semibold">SEO</h2>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default OurProjects;
