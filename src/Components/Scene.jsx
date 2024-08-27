import React from 'react';
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three';

function Scene() {
    // Load the texture using the correct root path
    let tex = useTexture('/SourceImg/Frame-1.png');

    return (
        <mesh>
            <cylinderGeometry args={[2, 2, 3, 500, 500, true]} />
            <meshBasicMaterial map={tex} side={THREE.DoubleSide} />
        </mesh>
    );
}

export default Scene;
