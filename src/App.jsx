import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Components/Scene";

function App() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{fov:30}}>
        <ambientLight />
        <OrbitControls />
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
