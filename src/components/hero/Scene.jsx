import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, Environment } from '@react-three/drei'

function CoreShape() {
  const group = useRef(null)

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.12
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15
  })

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh>
          <icosahedronGeometry args={[1.6, 1]} />
          <MeshDistortMaterial
            color="#dc7e3e"
            emissive="#3a1f0a"
            roughness={0.15}
            metalness={0.85}
            distort={0.3}
            speed={1.6}
          />
        </mesh>
      </Float>
      <Float speed={1} rotationIntensity={0.3} floatIntensity={1.2}>
        <mesh position={[2.6, 0.6, -1.4]} scale={0.45}>
          <torusGeometry args={[1, 0.32, 32, 100]} />
          <meshStandardMaterial color="#1f4c87" metalness={0.8} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1}>
        <mesh position={[-2.4, -0.8, -1]} scale={0.32}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#e8a878" metalness={0.7} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  )
}

export default function Scene() {
  return (
    <>
      <color attach="background" args={['#050d1a']} />
      <fog attach="fog" args={['#050d1a', 6, 14]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 5]} intensity={1.6} color="#f0c6a3" />
      <pointLight position={[-5, -3, -2]} intensity={0.6} color="#1f4c87" />
      <CoreShape />
      <Sparkles count={80} scale={9} size={2} speed={0.3} color="#e8a878" opacity={0.6} />
      <Environment preset="city" />
    </>
  )
}
