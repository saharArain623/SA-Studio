import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'

const mouse = { x: 0, y: 0 }
const small = typeof window !== 'undefined' && window.innerWidth < 768
const shapes = [
  { g: 'tk', p: [2.6, .6, 0], c: '#8b5cf6', s: .65, sp: .3 },
  { g: 'ico', p: [-2.8, 1.2, -1], c: '#22d3ee', s: .8, sp: .25 },
  { g: 'oct', p: [1, -1.9, -1], c: '#f472b6', s: .7, sp: .35 },
  { g: 'tor', p: [-1.8, -1.6, 0], c: '#a78bfa', s: .6, sp: .3 },
  { g: 'box', p: [3.8, -1.4, -2], c: '#38bdf8', s: .7, sp: .2 },
]
const Geo = ({ g }) =>
  g === 'tk' ? <torusKnotGeometry args={[.6, .2, small ? 64 : 128, small ? 8 : 16]} /> :
  g === 'ico' ? <icosahedronGeometry args={[1, 0]} /> :
  g === 'oct' ? <octahedronGeometry args={[1, 0]} /> :
  g === 'tor' ? <torusGeometry args={[.8, .25, 12, small ? 24 : 48]} /> : <boxGeometry args={[1.2, 1.2, 1.2]} />

function Shape({ g, p, c, s, sp }) {
  const r = useRef()
  useFrame(({ clock }) => {
    const t = clock.elapsedTime * sp, m = r.current
    m.rotation.x = t; m.rotation.y = t * .8
    m.position.y = p[1] + Math.sin(t * 5) * .3
    m.position.x += (p[0] + mouse.x * .5 - m.position.x) * .04
  })
  return <mesh ref={r} position={p} scale={s}><Geo g={g} /><meshStandardMaterial color={c} metalness={.6} roughness={.25} /></mesh>
}

function Particles() {
  const ref = useRef()
  const arr = useMemo(() => Float32Array.from({ length: (small ? 150 : 400) * 3 }, () => (Math.random() - .5) * 14), [])
  useFrame((_, d) => { ref.current.rotation.y += d * .03 })
  return <points ref={ref}><bufferGeometry><bufferAttribute attach="attributes-position" args={[arr, 3]} /></bufferGeometry><pointsMaterial size={.03} color="#a5b4fc" transparent opacity={.7} /></points>
}

function Scene() {
  const { viewport } = useThree()
  const k = Math.min(1, viewport.width / 8)
  return (
    <group scale={k}>
      <ambientLight intensity={.5} />
      <pointLight position={[4, 4, 4]} intensity={60} color="#22d3ee" />
      <pointLight position={[-4, -2, 3]} intensity={50} color="#a855f7" />
      {(small ? shapes.slice(0, 3) : shapes).map(s => <Shape key={s.g} {...s} />)}
      <Particles />
    </group>
  )
}

export default function Hero3D() {
  useEffect(() => {
    if (small) return
    const f = e => { mouse.x = e.clientX / innerWidth - .5; mouse.y = e.clientY / innerHeight - .5 }
    window.addEventListener('pointermove', f, { passive: true })
    return () => window.removeEventListener('pointermove', f)
  }, [])
  return <Canvas dpr={small ? 1 : [1, 1.5]} gl={{ antialias: !small, powerPreference: 'low-power' }} camera={{ position: [0, 0, 7], fov: 50 }}><Scene /></Canvas>
}
