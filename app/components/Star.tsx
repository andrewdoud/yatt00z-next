
'use client';

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';

const MeshComponent = ({ scale, pivotTranslation }: { scale: number, pivotTranslation: THREE.Vector3 }) => {
    const fileUrl = "/models/star_look_blend.glb";
    const mesh = useRef<THREE.Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
    gltf.scene.traverse((child) => {
        // Check if the child is a mesh
        if (child instanceof THREE.Mesh) {
            // Make the material double-sided
            child.material.side = THREE.DoubleSide;
        }
    });

    // Adjust the position of the children relative to the pivotTranslation
    gltf.scene.position.add(pivotTranslation);

    gltf.scene.scale.set(scale, scale, scale);

    useFrame(() => {
        mesh.current.rotation.y += -0.01;
    });
  
    return (
      <mesh ref={mesh}>
        <primitive object={gltf.scene} />
      </mesh>
    );
}

export function Star({ s } : { s: number }) {
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <Canvas className='h-2xl w-2xl'>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <MeshComponent scale={s} pivotTranslation={new THREE.Vector3(0, 0, 0)} />
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default Star;
