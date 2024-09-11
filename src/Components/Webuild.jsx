import React, { useState } from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

const websiteProjects = [
  {
    name: "Tilton School",
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
    name: "DR. MARC",
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
  {
    name: "Cosmetic Product Ad",
    description: "Design advertising for cosmetic product.",
    img: "https://i.pinimg.com/564x/aa/30/14/aa3014e7ba20ad38bfed5b43d84f97d5.jpg",
  },
  {
    name: "Product Coming Soon",
    description: "product coming soon",
    img: "https://i.pinimg.com/564x/ac/30/49/ac30499143047da2dd8cc5f8793402d6.jpg",
  },
  {
    name: "Product Launch Poster",
    description: "Product launching poster",
    img: "https://i.pinimg.com/736x/b1/1e/10/b11e10a9f9d81a105ce836a31de882cb.jpg",
  },
  {
    name: "Social Media Post",
    description: "Social media post design.",
    img: "https://cdn.dribbble.com/userupload/13811775/file/original-6dd5f3be34ea17fcd2bc0cde4a25997c.png?resize=1504x1128",
  },
  {
    name: "Cafe Website UI",
    description: "UI design for a cafe website.",
    img: "https://i.pinimg.com/564x/7b/99/f2/7b99f22c99122c58ed199ed4daf1c766.jpg",
  },
  {
    name: "School Website UI",
    description: "UI design for a school website.",
    img: "https://i.pinimg.com/564x/06/63/99/066399ec6b9d35460ef1e329d36b5e38.jpg",
  },
  {
    name: "Business Website UI",
    description: "UI design for a business website.",
    img: "https://i.pinimg.com/564x/a3/d5/6b/a3d56bcbc1428b1f502bc43260ca0c62.jpg",
  },
  {
    name: "Coffee Shop Landing Page",
    description: "Landing page design for a coffee shop.",
    img: "https://i.pinimg.com/564x/eb/b4/9b/ebb49b69876e748f64ac5b3819634416.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Webuild = () => {
  const [activeTab, setActiveTab] = useState("websites");

  const renderWebsiteProjects = () => {
    return websiteProjects.map((project, index) => (
      <motion.div
        key={index}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="bg-white rounded-lg overflow-hidden border duration-700 hover:bg-indigo-100"
      >
        <div className="h-auto relative overflow-hidden">
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img className="object-cover w-full h-full" src={project.img} alt={project.name} loading="lazy" />
          </motion.div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold hover:text-indigo-600 duration-500">
            {project.name}
          </h3>
          <p className="mt-2 text-gray-600">{project.description}</p>
          <div className="flex flex-wrap mt-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="bg-indigo-500 text-white text-xs px-2 py-1 rounded mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <button className="mt-3 text-sm text-white bg-indigo-500 px-3 py-2 rounded">
              Live Demo
            </button>
          </a>
        </div>
      </motion.div>
    ));
  };

  const renderGraphicProjects = () => {
    return graphicProjects.map((project, index) => (
      <div key={index} className="my-6 rounded-md border p-2 hover:bg-indigo-200 duration-500 ">
        <img className="object-cover w-full rounded-lg" src={project.img} alt={project.name} loading="lazy" />
        <h3 className="text-lg font-semibold mt-2">{project.name}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
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
          className={`px-4 h-fit py-2 mx-2 ${activeTab === "graphics" ? "bg-indigo-500 text-white" : "bg-gray-200"} rounded`}
        >
          Our Graphics
        </button>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-4">
        {activeTab === "websites" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {renderWebsiteProjects()}
          </div>
        ) : (
          <Masonry
            breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
          >
            {renderGraphicProjects()}
          </Masonry>
        )}
      </div>
    </div>
  );
};

export default Webuild;
