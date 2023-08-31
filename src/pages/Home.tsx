import React from 'react'
import { Typography, theme } from 'antd'
import MeshBox from '../components/MeshBox'
import { Canvas } from '@react-three/fiber'

interface Props {}

const HomePage: React.FC<Props> = () => {
  const { colorTextLightSolid } = theme.useToken().token

  return (
    <>
      <Typography color={colorTextLightSolid}>home</Typography>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshBox position={[-1.2, 0, 0]} />
      </Canvas>
    </>
  )
}

export default HomePage
