import React, { useEffect, useState } from 'react';
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three';

function Scene() {
    // State to manage texture loading
    const [texture, setTexture] = useState(null);
    const [error, setError] = useState(false);

    // Load texture safely
    useEffect(() => {
        try {
            const tex = useTexture('/SourceImg/Frame-1.png');
            setTexture(tex);
        } catch (err) {
            console.error('Texture failed to load:', err);
            setError(true);
        }
    }, []);

    if (error) {
        return <p>Texture failed to load. Please check your image path.</p>;
    }

    return (
        <Canvas>
            <OrbitControls />
            <mesh>
                <cylinderGeometry args={[2, 2, 3, 500, 500, true]} />
                {texture && (
                    <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
                )}
            </mesh>
        </Canvas>
    );
}

export default Scene;
