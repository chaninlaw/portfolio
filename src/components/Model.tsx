import { useEffect, useRef } from 'react'
// import * as THREE from 'three'
// import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

interface Props {}
const fileUrl = '/need_some_space/scene.gltf'
const Model: React.FC<Props> = () => {
  const modelRef = useRef<Mesh>(null!)
  const gltf = useGLTF(fileUrl)

  useEffect(() => {
    // modelRef.current.rotation.y = 1
    // modelRef.current.rotation.x = 0.1
    modelRef.current.rotation.z = -0.4
    // // modelRef.current.scale.set(3, 3, 3)
  }, [])

  return (
    <mesh ref={modelRef} position={[-1.1, -1.1, 4.6]}>
      <hemisphereLight intensity={0.15} groundColor={'black'} />
      <pointLight intensity={0.5} />
      <primitive object={gltf.scene} />
    </mesh>
  )
}

export default Model
