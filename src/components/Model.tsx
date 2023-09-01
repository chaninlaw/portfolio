import { useRef } from 'react'
// import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

interface Props {}
const fileUrl = '/need_some_space/scene.gltf'
const Model: React.FC<Props> = () => {
  const modelRef = useRef<Mesh>(null!)
  const { scene } = useGLTF(fileUrl)

  useFrame(() => {
    modelRef.current.rotation.y = -2.3
    modelRef.current.rotation.x = 0.55
    modelRef.current.rotation.z = 0.25
  })

  return (
    <mesh ref={modelRef} position={[0, 0, 0]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Model
