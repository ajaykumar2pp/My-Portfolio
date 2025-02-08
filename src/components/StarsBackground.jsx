import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const Stars = () => {
  const ref = useRef();
  const [positions] = useState(() => {
    let points = new Float32Array(5000);
    for (let i = 0; i < 5000; i += 3) {
      points[i] = (Math.random() - 0.5) * 4; // X position
      points[i + 1] = (Math.random() - 0.5) * 4; // Y position
      points[i + 2] = (Math.random() - 0.5) * 4; // Z position
    }
    return points;
  });

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsBackground;
