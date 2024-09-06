import React from 'react';
import Pojectcard from './Components/Pojectcard';
import NavComp from './Components/NavComp';
import Herosection from './Components/Herosection';
import Faq from './Components/Faq';
import TeamSection from './Components/TeamSection';
import TestimonialsSection from './TestimonialsSection';
import Textscroll from './Components/Animation/Textscroll';
import { BoxesContainer } from './Components/BoxesContainer';
import OurTeam from './Components/OurTeam';
import Ourporjects from './Components/Ourporjects';
function App() {
  return (
  <div className='w-full max-w-screen-xl mx-auto'>
  <BoxesContainer/>
  <OurTeam/>
  {/* <Pagelink/> */}
  {/* <Founder/> */}
    <div className="w-full bg-white text-[#000000] dark:bg-black md:h-96 lg:h-[600px] sm:flex block items-center justify-evenly sm:mt-0">
      <div className='sm:w-1/2 w-full md:h-96 lg:h-[600px] h-[450px] sm:-ml-[0%] ml-0 flex items-center justify-center'>
      <Ourporjects/>
      </div>
      <div className='sm:w-1/2 w-full relative sm:mt-0 -mt-20'>
        <h1 className='text-black dark:text-white text-3xl font-semibold text-center py-2'>Project Completed</h1>
        <div className='sm:h-[400px] h-fit overflow-y-scroll w-full'>
          <Pojectcard />
        </div>
      </div>
    </div>
    <Faq/>
    {/* <TeamSection/> */}
    <TestimonialsSection/>
  </div>
  );
}

export default App;
