"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function OrbitRings() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.z = clock.elapsedTime * 0.04;
    }
  });

  return (
    <group ref={group} rotation={[Math.PI / 2.35, 0, 0]}>
      {Array.from({ length: 13 }).map((_, index) => {
        const radius = 0.86 + index * 0.26;
        return (
          <mesh key={radius}>
            <torusGeometry args={[radius, 0.004, 8, 160]} />
            <meshBasicMaterial
              color={index % 3 === 0 ? "#72f7b2" : "#8b95b7"}
              transparent
              opacity={0.1 + index * 0.012}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function SignalParticles() {
  const group = useRef<THREE.Group>(null);
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, index) => {
        const angle = index * 1.73;
        const radius = 1.05 + (index % 9) * 0.26;
        return {
          position: new THREE.Vector3(
            Math.cos(angle) * radius,
            Math.sin(index * 0.81) * 0.18,
            Math.sin(angle) * radius * 0.36,
          ),
          size: 0.012 + (index % 4) * 0.006,
          delay: index * 0.15,
        };
      }),
    [],
  );

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.06;
    group.current.children.forEach((child, index) => {
      const pulse = Math.sin(clock.elapsedTime * 1.6 + particles[index].delay);
      child.scale.setScalar(0.75 + pulse * 0.28);
    });
  });

  return (
    <group ref={group}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[particle.size, 10, 10]} />
          <meshBasicMaterial color={index % 5 === 0 ? "#72f7b2" : "#ffffff"} />
        </mesh>
      ))}
    </group>
  );
}

function CoreAgent() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.position.y = Math.sin(clock.elapsedTime * 1.4) * 0.055;
      group.current.rotation.y = Math.sin(clock.elapsedTime * 0.8) * 0.08;
    }
  });

  return (
    <group ref={group} position={[0, 0.1, 0]}>
      <mesh castShadow>
        <sphereGeometry args={[0.36, 48, 32]} />
        <meshStandardMaterial
          color="#f7f8ff"
          roughness={0.34}
          metalness={0.04}
          emissive="#d6e4ff"
          emissiveIntensity={0.18}
        />
      </mesh>
      <mesh position={[-0.11, 0.07, 0.34]}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshBasicMaterial color="#07080c" />
      </mesh>
      <mesh position={[0.11, 0.07, 0.34]}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshBasicMaterial color="#07080c" />
      </mesh>
      <mesh position={[0, -0.23, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.34, 0.018, 10, 80]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.58} />
      <directionalLight position={[2.8, 4, 4]} intensity={1.8} color="#ffffff" />
      <pointLight position={[-2.4, 1.4, 2.4]} intensity={1.1} color="#72f7b2" />
      <group position={[0, -0.35, 0]} scale={[1.08, 1.08, 1.08]}>
        <OrbitRings />
        <SignalParticles />
        <CoreAgent />
      </group>
    </>
  );
}

export default function HeroOrbitScene() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(114,247,178,0.18),rgba(7,8,12,0)_45%),linear-gradient(to_bottom,rgba(7,8,12,0),rgba(114,247,178,0.08))]" />
      <Canvas
        camera={{ position: [0, 1.65, 5.2], fov: 38 }}
        dpr={[1, 1.8]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-10 bottom-10 h-28 rounded-[50%] bg-brand-mint/10 blur-3xl" />
    </div>
  );
}
