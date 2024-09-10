import React, { useState } from "react";
import { motion } from "framer-motion";

const websiteProjects = [
  {
    name: " Tilton School",
    description: "Creating your Future. Together.",
    tags: ["Figma", "React.js", "Framer Motion"],
    img: 'https://assets.awwwards.com/awards/element/2024/02/65c6a7b940b4e303831840.png',
    url: "https://viewbook.tiltonschool.org/",
  },
  {
    name: "Studio Birza",
    description: "Feel more comfortable in a project interior by Studio Birza",
    tags: ["Figma", "Gsap", "HTML"],
    img: 'https://assets.awwwards.com/awards/submissions/2024/07/66851b3667a56387517149.png',
    url: "https://www.studiobirzaveluwe.nl/",
  },
  {
    name: " DR. MARC",
    description: "We care about your smile.",
    tags: ["React.js", "Framer Motion", "SEO"],
    img: 'https://assets.awwwards.com/awards/element/2024/05/664201dcacb07799103566.png',
    url: "https://drmarc.webflow.io/",
  },
  {
    name: "Rattan Company",
    description: "Handmade Natural Rattan Indoor Furniture",
    tags: ["Shopify", "Visual Design", "SEO"],
    img: 'https://assets.awwwards.com/awards/submissions/2022/09/631ef4bbec1c5056212675.jpg',
    url: "https://therattancompany.co.uk/",
  },
];

const graphicProjects = [
  // Add your graphic design projects here
];

// const socialMediaResults = [
//   // Add your social media results here
// ];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Webuild = () => {
  const [activeTab, setActiveTab] = useState("websites");

  const renderProjects = () => {
    let projects = [];
    if (activeTab === "websites") {
      projects = websiteProjects;
    } else if (activeTab === "graphics") {
      projects = graphicProjects;
    } else {
      projects = socialMediaResults;
    }

    return projects.map((project, index) => (
      <motion.div
        key={index}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="bg-white rounded-lg overflow-hidden border duration-700 hover:bg-indigo-100"
      >
        <div className="h-fit sm:h-48 bg-indigo-200 relative overflow-y-hidden">
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img className="-mt-4 overflow-y-hidden" src={project.img} alt="" loading="lazy" />
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
    ));
  };

  return (
    <div className="py-10 mx-auto w-full max-w-screen-xl">
      <h1 className="text-2xl text-center font-semibold">Transforming Ideas into Digital Masterpieces</h1>
      <p className="px-5 w-full sm:w-1/2 text-sm text-center mx-auto my-2 font-semibold text-gray-500">
        Explore our innovative projects where creativity meets cutting-edge technology. From enterprise solutions to stunning digital designs, we deliver exceptional results that drive growth and innovation.
      </p>

      {/* Tab Navigation */}
      <div className="flex justify-center my-6">
        <button
          onClick={() => setActiveTab("websites")}
          className={`px-4 py-2 mx-2 ${activeTab === "websites" ? "bg-indigo-500 text-white" : "bg-gray-200"} rounded`}
        >
          Website Projects
        </button>
        <button
          onClick={() => setActiveTab("graphics")}
          className={`px-4 py-2 mx-2 ${activeTab === "graphics" ? "bg-indigo-500 text-white" : "bg-gray-200"} rounded`}
        >
          Our Graphics
        </button>
        {/* <button
          onClick={() => setActiveTab("social")}
          className={`px-4 py-2 mx-2 ${activeTab === "social" ? "bg-indigo-500 text-white" : "bg-gray-200"} rounded`}
        >
          Social Media Results
        </button> */}
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderProjects()}
        </div>
      </div>
    </div>
  );
};

export default Webuild;
