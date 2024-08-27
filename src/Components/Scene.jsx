import React from 'react';
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";
import * as THREE from 'three';
function Scene() {
    let tex = useTexture('./../SourceImg/bio-link-main.png');
    tex.needUpdate = true;
    console.log(tex);
    
  return (
    <mesh>
    <cylinderGeometry args={[2 ,2, 3, 100, 1000, true]}/>
    <meshBasicMaterial map={tex} side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Scene
