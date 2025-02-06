import React from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Example 3D Model Component for MongoDB
export const MongoDB = ({ position }) => {
  const mesh = useRef(null);

  // Animate the rotation for the model
  useFrame(() => {
    mesh.current.rotation.y += 0.01; // Rotate the model
  });

  // You can create 3D geometry for MongoDB icon using text or shapes
  const loader = new THREE.FontLoader();
  loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new THREE.TextGeometry('MongoDB', {
      font: font,
      size: 0.5,
      height: 0.1,
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(position[0], position[1] + 2, position[2]);
    mesh.current.add(textMesh);
  });

  return (
    <mesh position={position} ref={mesh}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  );
};

// Example Model for Express
export const Express = ({ position }) => {
  const mesh = useRef(null);
  
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  const loader = new THREE.FontLoader();
  loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new THREE.TextGeometry('Express', {
      font: font,
      size: 0.5,
      height: 0.1,
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xff6600 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(position[0], position[1] + 2, position[2]);
    mesh.current.add(textMesh);
  });

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={0xff6600} />
    </mesh>
  );
};

// React Logo
export const ReactLogo = ({ position }) => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  const loader = new THREE.FontLoader();
  loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new THREE.TextGeometry('React', {
      font: font,
      size: 0.5,
      height: 0.1,
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x61dafb });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(position[0], position[1] + 2, position[2]);
    mesh.current.add(textMesh);
  });

  return (
    <mesh position={position} ref={mesh}>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial color={0x61dafb} />
    </mesh>
  );
};

// NodeJS Model
export const NodeJS = ({ position }) => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  const loader = new THREE.FontLoader();
  loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new THREE.TextGeometry('Node.js', {
      font: font,
      size: 0.5,
      height: 0.1,
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x8CC84B });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(position[0], position[1] + 2, position[2]);
    mesh.current.add(textMesh);
  });

  return (
    <mesh position={position} ref={mesh}>
      <cylinderGeometry args={[2, 2, 0.5, 32]} />
      <meshStandardMaterial color={0x8CC84B} />
    </mesh>
  );
};
