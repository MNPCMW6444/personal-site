import React, { useRef, useState } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader, RepeatWrapping } from "three";
import { Stars } from "@react-three/drei";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: any;
    }
  }
}

extend({ OrbitControls });

function Controls() {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}

function Scene() {
  const mesh = useRef<THREE.Mesh>(null);
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

  useFrame((state) => {
    const mouseX = (state.mouse.x * Math.PI) / 2;
    const mouseY = (state.mouse.y * Math.PI) / 2;
    setPosition([mouseX, mouseY, 0]);
  });

  // Load texture
  const texture = new TextureLoader().load(
    "https://t3.ftcdn.net/jpg/01/70/53/70/240_F_170537095_942g7Zk2TcXplIdXpraxPN1C7YR8kDEk.jpg"
  );
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Cool() {
  return (
    <Canvas>
      <Controls />
      <ambientLight intensity={0.5} />
      <Stars />
      <Scene />
    </Canvas>
  );
}

export default Cool;
