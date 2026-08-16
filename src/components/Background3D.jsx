import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function FireParticles(props) {
  const ref = useRef();
  // Generate random positions in a sphere for the particles
  const sphere = random.inSphere(new Float32Array(6000), { radius: 1.5 });

  useFrame((state, delta) => {
    // Upward drifting motion like embers from a thermal plant
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y += delta / 20;
    
    // Slowly move the whole group upwards and wrap around
    ref.current.position.y += delta * 0.1;
    if (ref.current.position.y > 1) {
      ref.current.position.y = -1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ea580c" // Bright energetic orange/red (thermal coal theme)
          size={0.007}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2} // Additive blending for a glowing effect
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="canvas-container" style={{ background: 'radial-gradient(circle at center, #1e1b4b 0%, #020617 100%)' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <FireParticles />
      </Canvas>
    </div>
  );
}
