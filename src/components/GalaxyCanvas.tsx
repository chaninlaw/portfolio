import { Suspense, useEffect } from 'react'
import Model from './Model'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { CanvasLoader } from './Loader'

interface Props {}

const GalaxyCanvas: React.FC<Props> = () => {
  useEffect(() => {}, [])

  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [1, 10, 50], fov: 10 }}>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Suspense fallback={<CanvasLoader />}>
          <Model />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}
export default GalaxyCanvas
