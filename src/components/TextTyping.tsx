import React from 'react'
import { TypeAnimation } from 'react-type-animation'

interface Props {}

const sequence = [
  'create web experiences for coders and developers',
  1000,
  'create web experiences for designers and creatives',
  1000,
  'create web experiences for clients and businesses',
  1000,
  'create web experiences for users and audiences',
  1000,
  'create web experiences for innovators and dreamers',
]

const TextTyping: React.FC<Props> = () => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  )
}

export default TextTyping
