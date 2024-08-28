import React, { useRef } from 'react';
import { useTexture } from "@react-three/drei";
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three/examples/jsm/libs/tween.module.js';

function Scene() {
    // Load the texture using the correct root path
    const tex = useTexture('./Frame-2.png');
    let Scene = useRef(null)
    useFrame((state, delta) =>{
        Scene.current.rotation.y += delta * 0.5;
    });
    return (
        <group rotation={[0.2, 1.3, -0.2]}>
            <mesh ref={Scene}>
            <cylinderGeometry args={[1, 1, 1.3, 100, 100, true]} />
            <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
        </group>
    );
}

export default Scene;
