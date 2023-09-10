import { Col, Row } from 'antd'
import React from 'react'
import ShowCaseItem from '../components/ShowCaseItem'

interface Props {}

const ShowCaseItems = [
  {
    title: 'Frontend mentor - Space tourism website solution',
    solutionLink:
      'https://www.frontendmentor.io/solutions/responsive-space-tourism-with-tailwindcss-w3FgD4nny4',
    liveLink: 'https://chaninlaw.github.io/FM_space-tourism-website/',
    codeLink: 'https://github.com/chaninlaw/FM_space-tourism-website',
    image: {
      src: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/ponrfwv5lw8ibzewxiqc.jpg',
      alt: 'space-tourism-multipage-website-by-chaninlaw',
    },
  },
]

const Showcase: React.FC<Props> = () => {
  return (
    <Row className="mx-5 md:mx-20">
      <Col>
        {ShowCaseItems.map((item) => {
          return <ShowCaseItem item={item} />
        })}
      </Col>
    </Row>
  )
}

export default Showcase
