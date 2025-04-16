import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <spotLight position={[2,5,6]} angle={0.15} intensity={100} penumbra={0.2} color={'white'}/>
      <spotLight position={[4,5,4]} angle={0.3} intensity={40} penumbra={0.5} color={'#4cc9f0'}/>
      <spotLight position={[-3,5,5]} angle={0.4} intensity={60} penumbra={1} color={'#9d4edd'}/>
      <primitive object={new THREE.RectAreaLight('#a259ff', 8,3,2)} position={[1, 3, 4]} intensity={15} rotation={[-Math.PI / 4, Math.PI / 4, 0]}/>
        <pointLight position={[0, 1, 0]} color={"#7209b7"} intensity={10} />
        <pointLight position={[1, 2, -2]} color={"#0d0084"} intensity={10} />
    </>
  );
};

export default HeroLights;
