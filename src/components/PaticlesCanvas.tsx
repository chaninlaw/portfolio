import { useCallback } from 'react'
import Particles from 'react-particles'
import type { Container, Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

interface Props {
  isDarkMode: boolean
}

const PaticlesCanvas: React.FC<Props> = ({isDarkMode}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine)
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await container
    },
    []
  )
  return (
    <Particles
      id="tsparticles"
      className={`absolute inset-0 -z-10 ${isDarkMode ? 'bg-black' : 'bg-white'}`}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: isDarkMode ? '#ffffff': '#000',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: isDarkMode ? '#000000' : '#fff',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        retina_detect: true,
      }}
    />
  )
}

export default PaticlesCanvas
