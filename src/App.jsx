import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Components/Scene";
import { Bloom } from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';
import Pojectcard from './Components/Pojectcard';

function App() {
  return (
    <div className="w-full bg-white dark:bg-black md:h-96 lg:h-[600px] sm:flex block items-center justify-evenly">
      <div className='sm:w-1/2 w-full md:h-96 lg:h-[600px] h-[600px] sm:-ml-[0%] ml-0'>
      <Canvas flat camera={{fov: 40, position: [0, 0, 5] }} resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}>
        <ambientLight />
        <OrbitControls enablePan={false} enableZoom={false} />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={1}
            luminanceThreshold={2} 
            luminanceSmoothing={2}
          />
        </EffectComposer>
      </Canvas>
      </div>
      <div className='sm:w-1/2 w-full'>
        <h1 className='text-black dark:text-white text-3xl font-semibold text-center my-3'>Projects</h1>
        <div className='h-[400px] overflow-y-scroll w-full'>
          <Pojectcard />
        </div>
      </div>
    </div>
  );
}

export default App;
