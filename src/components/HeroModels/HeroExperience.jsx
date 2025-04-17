import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

function HeroExperience() {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights/>
      <Particles count={100}/>
      <group
        scale={isMobile ? 1.6 : isTablet ? 2 : 1}
        position={[0,-2.5,0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
      {/* <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"#ffffff"}/>
      </mesh> */}
    </Canvas>
  );
}

export default HeroExperience;
