import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Loader } from '../components/Loader'

const HomePage = Loader(lazy(() => import('../pages/Home')))
const AboutPage = Loader(lazy(() => import('../pages/About')))
const LabsPage = Loader(lazy(() => import('../pages/Labs')))
const RoadmapPage = Loader(lazy(() => import('../pages/Roadmap')))
const ShowcasePage = Loader(lazy(() => import('../pages/Showcase')))
const PostPage = Loader(lazy(() => import('../pages/Post')))

export const Routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/showcase', element: <ShowcasePage /> },
  { path: '/post', element: <PostPage /> },
  // { path: '/labs', element: <LabsPage /> },
  // { path: '/roadmap', element: <RoadmapPage /> },
]
