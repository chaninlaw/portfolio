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
  key: 'contact',
  title: 'contact me',
  path: `/contact`,
}

// const Roadmap: BreadcrumbItemType = {
//   key: 'roadmap',
//   title: 'roadmap',
//   path: `/roadmap`,
// }

export const MainBreadcrum = [Home, About, Showcase, Post]

export const NavbarItem = [
  {
    key: 'home',
    label: 'home',
    path: '#home'
  },
  {
    key: 'about',
    label: 'about me',
    path: `#about`,
  },
  {
    key: 'showcase',
    label: 'showcase',
    path: `#showcase`,
  },
  {
    key: 'skills',
    label: 'skills',
    path: `#skills`,
  },
  {
    key: 'experience',
    label: 'experience',
    path: '#experience',
  },
  {
    key: 'contact',
    label: 'contact me',
    path: '#contact',
  },
]
