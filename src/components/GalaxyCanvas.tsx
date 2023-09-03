import { Suspense, useEffect } from 'react'
import Model from './Model'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { CanvasLoader } from './Loader'

interface Props {}

const GalaxyCanvas: React.FC<Props> = () => {
  useEffect(() => {}, [])

  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <Canvas frameloop="demand" shadows gl={{ preserveDrawingBuffer: true }}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Suspense fallback={<CanvasLoader />}>
          <Model />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}
export default GalaxyCanvas
