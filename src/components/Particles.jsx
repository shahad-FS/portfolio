import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  // 1. Generate both data profiles AND the initial Float32Array ONCE
  const { particlesData, initialPositions } = useMemo(() => {
    const tempParticles = [];
    const tempPositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const posX = (Math.random() - 0.5) * 10;
      const posY = Math.random() * 10 + 5;
      const posZ = (Math.random() - 0.5) * 10;

      tempParticles.push({
        speed: 0.01 + Math.random() * 0.02, // slightly boosted for visible feedback
      });

      tempPositions[i * 3] = posX;
      tempPositions[i * 3 + 1] = posY;
      tempPositions[i * 3 + 2] = posZ;
    }

    return { particlesData: tempParticles, initialPositions: tempPositions };
  }, [count]);

  // 2. Animate the array safely without React overwriting it
  useFrame(() => {
    if (!mesh.current) return;

    const positions = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      let y = positions[i * 3 + 1];
      y -= particlesData[i].speed;

      // Reset particle to top if it goes off screen
      if (y < -5) y = Math.random() * 5 + 10;

      positions[i * 3 + 1] = y;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={initialPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.02} // Slightly larger for clarity during testing
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
