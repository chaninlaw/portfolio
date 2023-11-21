import { useEffect, useState } from 'react'

const withMousePosition = (WrapperComponent: React.FC<any>) => {
  return (props: any) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    })

    useEffect(() => {
      const handleMousePositionChange = (e: any) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        })
      }

      window.addEventListener('mousemove', handleMousePositionChange)
      return () => {
        window.removeEventListener('mousemove', handleMousePositionChange)
      }
    }, [])

    return <WrapperComponent {...props} mousePosition={mousePosition} />
  }
}

export default withMousePosition
