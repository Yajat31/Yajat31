"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";

type CrystalProps = {
  position: [number, number, number];
  scale?: number;
  color: string;
  speed?: number;
  rot?: [number, number, number];
  pointer: React.MutableRefObject<{ x: number; y: number }>;
};

function Crystal({
  position,
  scale = 1,
  color,
  speed = 1,
  rot = [0.4, 0.2, 0.1],
  pointer,
}: CrystalProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.x = rot[0] + t * 0.12 + pointer.current.y * 0.25;
    ref.current.rotation.y = rot[1] + t * 0.18 + pointer.current.x * 0.35;
    ref.current.position.x = position[0] + pointer.current.x * 0.35;
    ref.current.position.y =
      position[1] + Math.sin(t * 0.6) * 0.12 + pointer.current.y * 0.2;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          resolution={256}
          transmission={0.92}
          roughness={0.18}
          thickness={1.4}
          ior={1.4}
          chromaticAberration={0.04}
          anisotropy={0.15}
          distortion={0.12}
          distortionScale={0.3}
          temporalDistortion={0.08}
          color={color}
        />
      </mesh>
    </Float>
  );
}

function Scene({
  pointer,
}: {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const crystals = useMemo(
    () =>
      [
        {
          position: [-2.2, 0.4, 0] as [number, number, number],
          scale: 1.55,
          color: "#e8c85a",
          speed: 0.85,
          rot: [0.5, -0.3, 0.2] as [number, number, number],
        },
        {
          position: [2.1, -0.3, -0.4] as [number, number, number],
          scale: 1.15,
          color: "#9bb7d4",
          speed: 1.1,
          rot: [-0.2, 0.5, 0.1] as [number, number, number],
        },
        {
          position: [0.3, 1.5, -1.2] as [number, number, number],
          scale: 0.7,
          color: "#c9b8e8",
          speed: 1.35,
          rot: [0.3, 0.8, -0.2] as [number, number, number],
        },
      ] as const,
    []
  );

  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} />
      <directionalLight position={[-3, -2, 2]} intensity={0.35} color="#a8c4e0" />
      <Environment preset="city" environmentIntensity={0.55} />
      {crystals.map((c) => (
        <Crystal key={c.color + c.position.join(",")} {...c} pointer={pointer} />
      ))}
    </>
  );
}

function FallbackCrystals() {
  return (
    <>
      <div className="hero__crystal hero__crystal--a" aria-hidden="true" />
      <div className="hero__crystal hero__crystal--b" aria-hidden="true" />
    </>
  );
}

export function HeroScene() {
  const reduce = useReducedMotion();
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  if (reduce) return <FallbackCrystals />;

  return (
    <div className="hero__canvas" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene pointer={pointer} />
      </Canvas>
    </div>
  );
}
