import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Moon() {
    const meshRef = useRef();

    // Use steady high-res texture
    const props = useTexture({
        map: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg',
        bumpMap: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg',
    });

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <mesh ref={meshRef} position={[2, 0, 0]} rotation={[0, 0, 0.1]}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial
                {...props}
                bumpScale={0.05}
                metalness={0.1}
                roughness={0.7}
            />
        </mesh>
    );
}

const MoonBackground = () => {
    return (
        <div className="fixed inset-0 z-0 bg-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                {/* Lights */}
                <ambientLight intensity={0.1} />
                <directionalLight position={[-5, 3, 5]} intensity={2} />

                {/* Objects */}
                <React.Suspense fallback={null}>
                    <Moon />
                </React.Suspense>

                {/* Background Stars - Increased density and brightness */}
                <Stars radius={100} depth={50} count={20000} factor={6} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default MoonBackground;
