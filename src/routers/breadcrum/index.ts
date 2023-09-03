import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb'

const Home: BreadcrumbItemType = {
  key: 'home',
  title: 'home',
  path: `/`,
}

const About: BreadcrumbItemType = {
  key: 'about',
  title: 'about me',
  path: `/about`,
}

const Showcase: BreadcrumbItemType = {
  key: 'showcase',
  title: 'showcase',
  path: `/showcase`,
}

const Post: BreadcrumbItemType = {
  key: 'post',
  title: 'post',
  path: `/post`,
}

// const Roadmap: BreadcrumbItemType = {
//   key: 'roadmap',
//   title: 'roadmap',
//   path: `/roadmap`,
// }

export const MainBreadcrum = [Home, About, Showcase, Post]
