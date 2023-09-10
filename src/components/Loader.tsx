import { Suspense } from 'react'
import { Html, useProgress } from '@react-three/drei'
import { Spin } from 'antd'

export const Loader = (Component: React.FC) => (props: any) =>
  (
    <Suspense
      fallback={
        <div className="w-full min-h-screen grid place-content-center">
          <Spin size="large" />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  )

export const CanvasLoader = () => {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
