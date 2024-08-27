import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Components/Scene";
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing';
import { Bloom } from '@react-three/postprocessing';
import { EffectComposer, ToneMapping } from '@react-three/postprocessing';

function App() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas flat camera={{fov:30}}>
        <ambientLight />
        <OrbitControls />
        <Scene />
        <EffectComposer>
        <Bloom
            mipmapBlur
            intensity={1}
            luminanceThreshold={2} 
            luminanceSmoothing={2}
          />
          {/* <ToneMapping/> */}
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
