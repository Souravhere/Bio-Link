// src/components/Webuild.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: " Tilton School",
    description: "Creating your Future. Together.",
    tags: ["Figma", "React.js", "Framer Motion"],
    img:'https://assets.awwwards.com/awards/element/2024/02/65c6a7b940b4e303831840.png',
    url: "https://viewbook.tiltonschool.org/",
  },
  {
    name: "Studio Birza",
    description: "Feel more comfortable in a project interior by Studio Birza",
    tags: ["Figma", "Gsap", "HTML"],
    img:'https://assets.awwwards.com/awards/submissions/2024/07/66851b3667a56387517149.png',
    url: "https://www.studiobirzaveluwe.nl/",
  },
  {
    name: "Skuad",
    description: "$19.8M raised in funding",
    tags: ["B2B SaaS", "SEO"],
    url: "#",
  },
  {
    name: "Hyperverge",
    description: "65% growth in enterprise leads",
    tags: ["B2B SaaS", "Visual Design", "Webflow Development"],
    url: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Webuild = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-2xl"
            >
              <div className="h-48 bg-indigo-200 relative">
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                    <img src={project.img} alt=""  loading="lazy"/>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold hover:text-indigo-600 duration-500">
                  {project.name}
                </h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-indigo-500 text-white text-xs px-2 py-1 rounded-full mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url} target="blank"
                  className="block mt-4 text-indigo-600 hover:text-indigo-500 duration-500"
                >
                  Live Demo &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webuild;
