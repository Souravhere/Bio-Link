import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";
import * as THREE from 'three';

function App() {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <Canvas>
          <OrbitControls/>
          <ambientLight/>
          <mesh>
            <cylinderGeometry args={[1 ,1, 1, 30, 30, true]}/>
            <meshBasicMaterial side={THREE.DoubleSide} />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

export default App;
 