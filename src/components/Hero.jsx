// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

const Hero = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center py-20">
    <div className="text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Ajay Kumar</h1>
      <p className="mt-4 text-lg md:text-xl">Full Stack Web Developer & Designer</p>
    </div>
    {/* <Canvas className="absolute top-0 left-0 w-full h-screen">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas> */}
  </div>
);

export default Hero;
