import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <Canvas>
          <OrbitControls/>
          <ambientLight/>
          <mesh>
            <cylinderGeometry args={[3 ,3, 10, 10, 10, false]}/>
            <meshBasicMaterial color="white " />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

export default App;
 