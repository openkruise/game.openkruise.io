import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '88e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '3b0'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '882'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'e5b'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'b11'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'cd9'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '670'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '2ff'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '200'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '77d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'ad6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '366'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '956'),
    routes: [
      {
        path: '/docs/category/快速开始',
        component: ComponentCreator('/docs/category/快速开始', 'a37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/其他',
        component: ComponentCreator('/docs/category/其他', 'abb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/用户手册',
        component: ComponentCreator('/docs/category/用户手册', '1b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/最佳实践',
        component: ComponentCreator('/docs/category/最佳实践', 'f50'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-gameserver',
        component: ComponentCreator('/docs/tutorial-basics/deploy-gameserver', '0ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/hpa-gameserver',
        component: ComponentCreator('/docs/tutorial-basics/hpa-gameserver', 'c8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/install',
        component: ComponentCreator('/docs/tutorial-basics/install', 'b44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/update-gameserver',
        component: ComponentCreator('/docs/tutorial-basics/update-gameserver', 'ef0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-examples/pve',
        component: ComponentCreator('/docs/tutorial-examples/pve', '3ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-examples/pvp',
        component: ComponentCreator('/docs/tutorial-examples/pvp', '0d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/concept',
        component: ComponentCreator('/docs/tutorial-extras/concept', '510'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/network-settings',
        component: ComponentCreator('/docs/tutorial-extras/network-settings', '12f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/order-settings',
        component: ComponentCreator('/docs/tutorial-extras/order-settings', '3ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/service-quality',
        component: ComponentCreator('/docs/tutorial-extras/service-quality', 'c98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/update-settings',
        component: ComponentCreator('/docs/tutorial-extras/update-settings', 'a60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-others/contributor',
        component: ComponentCreator('/docs/tutorial-others/contributor', 'bc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-others/faq',
        component: ComponentCreator('/docs/tutorial-others/faq', '338'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '123'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
