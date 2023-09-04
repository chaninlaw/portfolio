import { TimelineProps, Typography } from 'antd'

import { FaNodeJs, FaReact } from 'react-icons/fa'
import { TbBrandRedux } from 'react-icons/tb'
import { BiLogoPostgresql } from 'react-icons/bi'
import { ImHtmlFive } from 'react-icons/im'
import { BsGit, BsGithub } from 'react-icons/bs'
import { LiaFigma } from 'react-icons/lia'
import {
  SiCss3,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { LoadingOutlined } from '@ant-design/icons'

export const timelineItems: TimelineProps['items'] = [
  {
    label: <Typography>2015 - 2019</Typography>,
    children: (
      <>
        <Typography>Bachelor of Economics in Business</Typography>
        <Typography>University: Kasetsart University, Bang Khen</Typography>
      </>
    ),
  },
  {
    label: <Typography>2020 - 2022</Typography>,
    children: (
      <>
        <Typography>
          Master of Management, Management and Strategy
          <span className="text-[#d1d5db] text-[10px]">(GPA 3.73)</span>
        </Typography>
        <Typography>
          University: College of Management Mahidol University
        </Typography>
      </>
    ),
  },
  {
    label: <Typography>Jan 2023</Typography>,
    children: (
      <Typography>
        'From Management to Code: My Journey of Self-Learning and Becoming a
        Developer'
      </Typography>
    ),
  },
  {
    label: <Typography>June 2023</Typography>,
    children: 'Techup bootcamp',
  },
  {
    label: <Typography>July 2023</Typography>,
    children: (
      <>
        <Typography>Swift Dynamics</Typography>
        <Typography>Front-end developer</Typography>
      </>
    ),
  },
  {
    dot: <LoadingOutlined spin />,
    label: <Typography>Next</Typography>,
    children: <Typography>Roadmap</Typography>,
  },
]

const iconSize = 25

export const mySkills = [
  { label: 'React', icon: <FaReact size={iconSize} /> },
  { label: 'Redux', icon: <TbBrandRedux size={iconSize} /> },
  { label: 'Nextjs', icon: <SiNextdotjs size={iconSize} /> },
  { label: 'Javascript', icon: <SiJavascript size={iconSize} /> },
  { label: 'Typescript', icon: <SiTypescript size={iconSize} /> },
  { label: 'Nodejs', icon: <FaNodeJs size={iconSize} /> },
  { label: 'Express', icon: <SiExpress size={iconSize} /> },
  { label: 'HTML', icon: <ImHtmlFive size={iconSize} /> },
  { label: 'CSS', icon: <SiCss3 size={iconSize} /> },
  { label: 'Tailwindcss', icon: <SiTailwindcss size={iconSize} /> },
  { label: 'Styledcomponents', icon: <SiStyledcomponents size={iconSize} /> },
  { label: 'MaterialUI', icon: <SiMui size={iconSize} /> },
  { label: 'Figma', icon: <LiaFigma size={iconSize} /> },
  { label: 'Github', icon: <BsGithub size={iconSize} /> },
  { label: 'Git', icon: <BsGit size={iconSize} /> },
  { label: 'Postgresql', icon: <BiLogoPostgresql size={iconSize} /> },
  { label: 'Mongodb', icon: <SiMongodb size={iconSize} /> },
]
