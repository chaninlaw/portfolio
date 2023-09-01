import { Suspense } from 'react'
import { Html, useProgress } from '@react-three/drei'

export const Loader = (Component: React.FC) => (props: any) =>
  (
    <Suspense fallback={<>Loading...</>}>
      <Component {...props} />
    </Suspense>
  )

export const CanvasLoader = () => {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}