import { Suspense } from 'react'

export const Loader = (Component: React.FC) => (props: any) =>
  (
    <Suspense fallback={<>Loading...</>}>
      <Component {...props} />
    </Suspense>
  )
