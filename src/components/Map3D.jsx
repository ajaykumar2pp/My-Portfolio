import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Load the font once
const fontLoader = new THREE.FontLoader();
let font = null;
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (loadedFont) => {
  font = loadedFont;
});

// Example 3D Model Component for MongoDB
const MongoDB = ({ position }) => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  useEffect(() => {
    if (font && mesh.current) {
      const textGeometry = new THREE.TextGeometry('MongoDB', {
        font: font,
        size: 0.5,
        height: 0.1,
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(position[0], position[1] + 2, position[2]);
      mesh.current.add(textMesh);
    }
  }, [font, position]);

  return (
    <mesh position={position} ref={mesh}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  );
};

// Example Model for Express
const Express = ({ position }) => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  useEffect(() => {
    if (font && mesh.current) {
      const textGeometry = new THREE.TextGeometry('Express', {
        font: font,
        size: 0.5,
        height: 0.1,
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xff6600 });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(position[0], position[1] + 2, position[2]);
      mesh.current.add(textMesh);
    }
  }, [font, position]);

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={0xff6600} />
    </mesh>
  );
};

// React Logo
const ReactLogo = ({ position }) => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  useEffect(() => {
    if (font && mesh.current) {
      const textGeometry = new THREE.TextGeometry('React', {
        font: font,
        size: 0.5,
        height: 0.1,
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0x61dafb });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(position[0], position[1] + 2, position[2]);
      mesh.current.add(textMesh);
    }
  }, [font, position]);

  return (
    <mesh position={position} ref={mesh}>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial color={0x61dafb} />
    </mesh>
  );
};

// NodeJS Model
const NodeJS = ({ position }) => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  useEffect(() => {
    if (font && mesh.current) {
      const textGeometry = new THREE.TextGeometry('Node.js', {
        font: font,
        size: 0.5,
        height: 0.1,
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0x8CC84B });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(position[0], position[1] + 2, position[2]);
      mesh.current.add(textMesh);
    }
  }, [font, position]);

  return (
    <mesh position={position} ref={mesh}>
      <cylinderGeometry args={[2, 2, 0.5, 32]} />
      <meshStandardMaterial color={0x8CC84B} />
    </mesh>
  );
};

const Map3D = () => {
  return (
    <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <OrbitControls />
      <MongoDB position={[-4, 0, 0]} />
      <Express position={[-1, 0, 0]} />
      <ReactLogo position={[2, 0, 0]} />
      <NodeJS position={[5, 0, 0]} />
    </Canvas>
  );
};

export default Map3D;

// text-blue-400 group-hover:text-blue-300
