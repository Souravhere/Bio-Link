import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Components/Scene";
import { Bloom } from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';
import Pojectcard from './Components/Pojectcard';
import NavComp from './Components/NavComp';
import Herosection from './Components/Herosection';
import { Pagelink } from './Components/Pagelink';
import Faq from './Components/Faq';
import TeamSection from './Components/TeamSection';
import Footer from './Components/Footer';
import TestimonialsSection from './TestimonialsSection';
import Textscroll from './Components/Animation/Textscroll';

function App() {
  return (
  <>
  <Textscroll/>
  <NavComp/>
  <Herosection/>
  <Pagelink/>
  {/* <Navbars/> */}
  {/* <Founder/> */}
    <div className="w-full bg-white text-[#000000] dark:bg-black md:h-96 lg:h-[600px] sm:flex block items-center justify-evenly sm:mt-0">
      <div className='sm:w-1/2 w-full md:h-96 lg:h-[600px] h-[600px] sm:-ml-[0%] ml-0'>
      <Canvas flat camera={{fov: 40, position: [0, 0, 5] }} resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}>
        <ambientLight />
        <OrbitControls enablePan={false} enableZoom={false} />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0}
            luminanceThreshold={2} 
            luminanceSmoothing={2}
          />
        </EffectComposer>
      </Canvas>
      </div>
      <div className='sm:w-1/2 w-full relative sm:mt-0 -mt-20'>
        {/* <h1 className='text-black dark:text-white text-3xl font-semibold text-center my-3'>Projects</h1> */}
        <h1 className='text-black dark:text-white text-3xl font-semibold text-center py-2'>Project Completed</h1>
        <div className='sm:h-[400px] h-fit overflow-y-scroll w-full'>
          <Pojectcard />
        </div>
      </div>
    </div>
    <Faq/>
    {/* <TeamSection/> */}
    <TestimonialsSection/>
    <Footer />
  </>
  );
}

export default App;
