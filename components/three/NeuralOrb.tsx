"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NeuralCore() {
  const core = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    return Array.from({ length: 90 }, () => {
      const radius = 1.9 + Math.random() * 1.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    });
  }, []);

  useFrame(({ clock }) => {
    if (core.current) {
      core.current.rotation.x = clock.elapsedTime * 0.18;
      core.current.rotation.y = clock.elapsedTime * 0.28;
    }
    if (ring.current) {
      ring.current.rotation.y = clock.elapsedTime * 0.12;
      ring.current.rotation.z = clock.elapsedTime * 0.08;
    }
  });

  return (
    <group>
      <Float speed={2.2} rotationIntensity={0.55} floatIntensity={0.8}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.25, 2]} />
          <meshStandardMaterial color="#22d3ee" wireframe transparent opacity={0.48} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial emissive="#8b5cf6" emissiveIntensity={1.5} color="#8b5cf6" />
        </mesh>
      </Float>

      <group ref={ring}>
        {points.map((point, index) => (
          <mesh key={index} position={point}>
            <sphereGeometry args={[0.018, 8, 8]} />
            <meshStandardMaterial emissive="#67e8f9" emissiveIntensity={0.9} color="#67e8f9" />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function NeuralOrb() {
  return (
    <div className="h-[420px] w-full overflow-hidden rounded-card border border-white/10 bg-white/[0.04] shadow-glow">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.35} />
        <pointLight position={[4, 4, 5]} intensity={2.5} color="#22d3ee" />
        <pointLight position={[-4, -3, 4]} intensity={1.8} color="#8b5cf6" />
        <Stars radius={80} depth={35} count={1200} factor={3} saturation={0} fade speed={0.7} />
        <NeuralCore />
      </Canvas>
    </div>
  );
}
