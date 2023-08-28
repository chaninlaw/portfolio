import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Loader } from '../components/Loader'

const HomePage = Loader(lazy(() => import('../pages/home')))
const AboutPage = Loader(lazy(() => import('../pages/about')))
const LabsPage = Loader(lazy(() => import('../pages/labs')))
const RoadmapPage = Loader(lazy(() => import('../pages/roadmap')))

export const Routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/labs', element: <LabsPage /> },
  { path: '/roadmap', element: <RoadmapPage /> },
]
