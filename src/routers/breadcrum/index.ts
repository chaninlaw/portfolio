import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb'

const Home: BreadcrumbItemType = {
  key: 'home',
  title: 'home',
  path: `/`,
}

const About: BreadcrumbItemType = {
  key: 'about',
  title: 'about',
  path: `/about`,
}

const Labs: BreadcrumbItemType = {
  key: 'labs',
  title: 'labs',
  path: `/labs`,
}

const Roadmap: BreadcrumbItemType = {
  key: 'roadmap',
  title: 'roadmap',
  path: `/roadmap`,
}

export const MainBreadcrum = [Home, About, Labs, Roadmap]
