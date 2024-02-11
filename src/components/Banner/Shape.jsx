"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Edges,
  MeshPortalMaterial,
  CameraControls,
  Environment,
  PivotControls,
  Float,
} from "@react-three/drei";

export default function Shape() {
  return (
    <div className="h-full aspect-square rounded-lg overflow-hidden">
      <Canvas
        shadows
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="w-full h-full cursor-pointer bg-slate-800 dark:bg-slate-300"
      >
        <Suspense fallback={null}>
          <Float speed={1} rotationIntensity={5} floatIntensity={1}>
            <PivotControls anchor={[-1.1, -1.1, -1.1]} scale={0} lineWidth={0}>
              <mesh castShadow receiveShadow>
                <boxGeometry args={[2, 2, 2]} />
                <Edges />
                <Side rotation={[0, 0, 0]} bg="orange" index={0}>
                  <torusGeometry args={[0.65, 0.3, 34]} />
                </Side>
                <Side rotation={[0, Math.PI, 0]} bg="lightblue" index={1}>
                  <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
                </Side>
                <Side
                  rotation={[0, Math.PI / 2, Math.PI / 2]}
                  bg="lightgreen"
                  index={2}
                >
                  <boxGeometry args={[1.15, 1.15, 1.15]} />
                </Side>
                <Side
                  rotation={[0, Math.PI / 2, -Math.PI / 2]}
                  bg="aquamarine"
                  index={3}
                >
                  <octahedronGeometry />
                </Side>
                <Side rotation={[0, -Math.PI / 2, 0]} bg="indianred" index={4}>
                  <icosahedronGeometry />
                </Side>
                <Side rotation={[0, Math.PI / 2, 0]} bg="hotpink" index={5}>
                  <dodecahedronGeometry />
                </Side>
              </mesh>
            </PivotControls>
          </Float>
        </Suspense>
        <CameraControls makeDefault minDistance={5} maxDistance={5} />
      </Canvas>
    </div>
  );
}

function Side({ rotation = [0, 0, 0], bg = "#f0f0f0", children, index }) {
  const mesh = useRef();
  const { nodes } = useGLTF("/aobox-transformed.glb");
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += delta;
  });
  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <mesh
        castShadow
        receiveShadow
        rotation={rotation}
        geometry={nodes.Cube.geometry}
      >
        <meshStandardMaterial
          aoMapIntensity={1}
          aoMap={nodes.Cube.material.aoMap}
          color={bg}
        />
        <spotLight
          castShadow
          color={bg}
          intensity={900}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-normalBias={0.05}
          shadow-bias={0.0001}
        />
      </mesh>

      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  );
}
