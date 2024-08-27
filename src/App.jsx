import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";
import * as THREE from 'three';
import Scene from "./Components/Scene";

function App() {
  
  return (
    <>
      <div className="w-full h-screen bg-black">
        <Canvas>
          <OrbitControls/>
          <ambientLight/>
          <Scene/>
        </Canvas>
      </div>
    </>
  );
}

export default App;
 