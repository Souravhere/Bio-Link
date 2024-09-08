import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Faq() {
  const [activeTab, setActiveTab] = useState('about');
  const [openQuestion, setOpenQuestion] = useState(null);

  const tabs = [
    {
      id: 'about',
      label: 'Website Development',
      content: (
        <div>
          <h2 className="text-xl font-semibold">Website Development FAQs</h2>
          <div className="mt-4">
            <div className={`border rounded-lg ${openQuestion === 'q1' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4`} onClick={() => setOpenQuestion(openQuestion === 'q1' ? null : 'q1')}>
              <h3 className="font-medium cursor-pointer">What types of websites does Bytte create?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q1' ? 'auto' : 0, opacity: openQuestion === 'q1' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>At Bytte, we offer a diverse range of web development services to meet your needs. We specialize in creating <strong>animated websites</strong> that captivate and engage visitors through dynamic visuals and interactive elements. If you prefer a more straightforward approach, we also design <strong>simple websites</strong> that are clean, user-friendly, and efficient. For those looking for advanced functionalities, our <strong>feature-based websites</strong> provide customized solutions with tailored features to suit your specific requirements. Whether you need a high-impact animated site or a minimalist design, our team is equipped to deliver a product that aligns with your vision.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q2' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q2' ? null : 'q2')}>
              <h3 className="font-medium cursor-pointer">How does Bytte determine the pricing for website development?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q2' ? 'auto' : 0, opacity: openQuestion === 'q2' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>Pricing at Bytte is determined based on the <strong>complexity of the website</strong> and the features required. We understand that each project is unique, so we evaluate factors such as the scope of work, the level of customization, and the technological requirements to provide an accurate quote. For instance, a <strong>feature-rich website</strong> with advanced functionalities will typically have a higher price point compared to a <strong>simple website</strong>. We aim to offer transparent pricing and work closely with you to ensure that you receive the best value for your investment, tailored to your specific needs and objectives.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q3' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q3' ? null : 'q3')}>
              <h3 className="font-medium cursor-pointer">Can Bytte handle both small and large-scale web development projects?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q3' ? 'auto' : 0, opacity: openQuestion === 'q3' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>Yes, Bytte is equipped to handle web development projects of all sizes. Whether you need a <strong>small, simple website</strong> or a <strong>large-scale, complex website</strong> with extensive features and animations, our team has the expertise and resources to deliver high-quality results. We approach each project with the same level of commitment and attention to detail, ensuring that your website is not only functional and aesthetically pleasing but also aligned with your business goals. No matter the scale of your project, we are dedicated to providing exceptional service and support throughout the development process.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q4' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q4' ? null : 'q4')}>
              <h3 className="font-medium cursor-pointer">What should I expect during the website development process with Bytte?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q4' ? 'auto' : 0, opacity: openQuestion === 'q4' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>When working with Bytte, you can expect a collaborative and transparent website development process. Initially, we will discuss your <strong>requirements and goals</strong> to understand your vision and objectives. Our team will then create a detailed <strong>project plan</strong> outlining key milestones and deliverables. Throughout the development phase, we will keep you informed with regular updates and seek your feedback to ensure that the project aligns with your expectations. Whether you're opting for an <strong>animated website</strong>, a <strong>simple design</strong>, or a <strong>feature-based solution</strong>, our goal is to deliver a final product that meets your needs and exceeds your expectations. Our commitment to quality and customer satisfaction drives us to provide exceptional results at every stage of the project.</p>
              </motion.div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'services',
      label: 'Graphic Design',
      content: (
        <div>
          <h2 className="text-xl font-semibold">Graphic Design FAQs</h2>
          <div className="mt-4">
            <div className={`border rounded-lg ${openQuestion === 'q4' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4`} onClick={() => setOpenQuestion(openQuestion === 'q4' ? null : 'q4')}>
              <h3 className="font-medium cursor-pointer">What types of graphic design services does Bytte offer?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q4' ? 'auto' : 0, opacity: openQuestion === 'q4' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>At Bytte, we provide a comprehensive range of <strong>graphic design services</strong> to meet all your visual needs. Whether you require eye-catching <strong>marketing posters</strong>, engaging <strong>social media posts</strong>, or <strong>creative posters</strong> for various occasions, we've got you covered. Our expertise extends to designing <strong>branding materials</strong>, <strong>infographics</strong>, and <strong>custom illustrations</strong> that help convey your message effectively. We use a variety of tools including <strong>Figma</strong>, <strong>Canva</strong>, and <strong>Photoshop</strong> to ensure the highest quality of designs tailored to your requirements.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q5' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q5' ? null : 'q5')}>
              <h3 className="font-medium cursor-pointer">How does Bytte approach graphic design projects?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q5' ? 'auto' : 0, opacity: openQuestion === 'q5' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
               <p>When starting a <strong>graphic design project</strong> with Bytte, we follow a structured and collaborative approach. First, we engage in a <strong>detailed consultation</strong> to understand your brand, goals, and specific needs. Next, our team of skilled designers drafts initial concepts using industry-leading tools like <strong>Figma</strong> and <strong>Photoshop</strong>. We then work closely with you to refine the designs based on your feedback. Our goal is to create <strong>visually appealing</strong> and <strong>effective graphics</strong> that resonate with your target audience and enhance your brand's presence.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q6' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q6' ? null : 'q6')}>
              <h3 className="font-medium cursor-pointer">What tools do you use for creating graphics, and why?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q6' ? 'auto' : 0, opacity: openQuestion === 'q6' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>At Bytte, we use a range of <strong>professional graphic design tools</strong> to deliver top-notch results. <strong>Figma</strong> is ideal for collaborative design work and creating interactive prototypes, allowing us to work seamlessly with clients in real-time. <strong>Canva</strong> offers user-friendly templates and design elements that are perfect for quick, visually engaging content. <strong>Photoshop</strong> remains a staple for detailed image editing and complex design tasks. Additionally, we utilize other tools as needed to ensure that we meet your specific design needs and provide you with high-quality, polished graphics.</p>
              </motion.div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'statistics',
      label: 'Social Media Management',
      content: (
        <div>
          <h2 className="text-xl font-semibold">Social Media Management FAQs</h2>
          <div className="mt-4">
            <div className={`border rounded-lg ${openQuestion === 'q7' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4`} onClick={() => setOpenQuestion(openQuestion === 'q7' ? null : 'q7')}>
              <h3 className="font-medium cursor-pointer">What social media platforms does Bytte manage?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q7' ? 'auto' : 0, opacity: openQuestion === 'q7' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>Bytte provides comprehensive social media management services across a wide range of platforms, including <strong>Instagram</strong>, <strong>LinkedIn</strong>, <strong>X (formerly Twitter)</strong>, and <strong>WhatsApp</strong>. We ensure that your brand maintains a consistent and engaging presence on each platform, tailored to the unique characteristics and audience of each one. Whether you need daily posts, strategic content, or targeted advertising, we've got you covered.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q8' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q8' ? null : 'q8')}>
              <h3 className="font-medium cursor-pointer"> How often does Bytte post content on social media?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q8' ? 'auto' : 0, opacity: openQuestion === 'q8' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>At Bytte, we believe in keeping your audience engaged through <strong>regular content updates</strong>. We create and schedule posts based on your brand’s needs and goals, which can vary from daily posts to weekly updates. Our approach includes a mix of <strong>strategic content</strong>, promotional materials, and interactive posts to ensure maximum visibility and engagement.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q9' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q9' ? null : 'q9')}>
              <h3 className="font-medium cursor-pointer"> What factors determine the pricing for social media management?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q9' ? 'auto' : 0, opacity: openQuestion === 'q9' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>The cost of social media management at Bytte depends on several factors, including the <strong>number of posts</strong> you require, the <strong>complexity of content</strong>, and the specific platforms you want to focus on. We offer customized packages tailored to your needs, ensuring you get the best value for your investment. Our team will work with you to understand your requirements and provide a detailed quote based on your social media strategy.</p>
              </motion.div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full rounded-lg dark:bg-gray-800 dark:border-gray-700 px-2">
        <div className='w-full sm:text-left sm:px-2 my-4 text-center'>
            <h1 className='font-bold sm:text-4xl py-2 sticky top-0 text-2xl text-center text-indigo-800'>Frequently asked questions</h1>
            <p className='font-semibold text-gray-400 mt-2 text-center sm:px-0 px-3'>I’m joking. Nobody asked any questions yet. I came up with them myself.</p>
            {/* <img className='sm:block hidden' src="./our-project-3.png" alt="" /> */}
        </div>
        <div className='w-full mx-auto'>
        <ul className="flex items-center justify-evenly text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" role="tablist">
        {tabs.map((tab) => (
          <li key={tab.id} className="me-2">
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`inline-block p-4 ${
                activeTab === tab.id
                  ? 'text-white dark:text-blue-500 bg-indigo-500 dark:bg-gray-800'
                  : 'hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300'
              } rounded-lg`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div id="defaultTabContent" className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: activeTab === tab.id ? 1 : 0, y: activeTab === tab.id ? 0 : 10 }}
            transition={{ duration: 0.5 }}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
        </div>
    </div>
  );
}

export default Faq;
