import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/game.openkruise.io/blog',
    component: ComponentCreator('/game.openkruise.io/blog', '9b5'),
    exact: true
  },
  {
    path: '/game.openkruise.io/blog/archive',
    component: ComponentCreator('/game.openkruise.io/blog/archive', 'ac8'),
    exact: true
  },
  {
    path: '/game.openkruise.io/blog/first-blog-post',
    component: ComponentCreator('/game.openkruise.io/blog/first-blog-post', '6f0'),
    exact: true
  },
  {
    path: '/game.openkruise.io/blog/long-blog-post',
    component: ComponentCreator('/game.openkruise.io/blog/long-blog-post', '4d2'),
    exact: true
  },
  {
    path: '/game.openkruise.io/blog/mdx-blog-post',
    component: ComponentCreator('/game.openkruise.io/blog/mdx-blog-post', '494'),
    exact: true
  },
  {
    path: '/game.openkruise.io/blog/tags',
    component: ComponentCreator('/game.openkruise.io/blog/tags', 'dc3'),
    exact: true
  },
  {
    path: '/game.openkruise.io/blog/tags/docusaurus',
    component: ComponentCreator('/game.openkruise.io/blog/tags/docusaurus', 'c75'),
    exact: true
  },
  {
    path: '/game.openkruise.io/blog/tags/facebook',
    component: ComponentCreator('/game.openkruise.io/blog/tags/facebook', '882'),
    exact: true
  },
  {
    path: '/game.openkruise.io/blog/tags/hello',
    component: ComponentCreator('/game.openkruise.io/blog/tags/hello', 'e78'),
    exact: true
  },
  {
    path: '/game.openkruise.io/blog/tags/hola',
    component: ComponentCreator('/game.openkruise.io/blog/tags/hola', 'e1e'),
    exact: true
  },
  {
    path: '/game.openkruise.io/blog/welcome',
    component: ComponentCreator('/game.openkruise.io/blog/welcome', 'f32'),
    exact: true
  },
  {
    path: '/game.openkruise.io/markdown-page',
    component: ComponentCreator('/game.openkruise.io/markdown-page', '82e'),
    exact: true
  },
  {
    path: '/game.openkruise.io/docs',
    component: ComponentCreator('/game.openkruise.io/docs', '494'),
    routes: [
      {
        path: '/game.openkruise.io/docs/category/快速开始',
        component: ComponentCreator('/game.openkruise.io/docs/category/快速开始', '35f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/category/其他',
        component: ComponentCreator('/game.openkruise.io/docs/category/其他', 'c95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/category/用户手册',
        component: ComponentCreator('/game.openkruise.io/docs/category/用户手册', '0b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/category/最佳实践',
        component: ComponentCreator('/game.openkruise.io/docs/category/最佳实践', '024'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/intro',
        component: ComponentCreator('/game.openkruise.io/docs/intro', 'cd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-basics/deploy-gameserver',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-basics/deploy-gameserver', '7b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-basics/hpa-gameserver',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-basics/hpa-gameserver', '006'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-basics/install',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-basics/install', 'ce8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-basics/update-gameserver',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-basics/update-gameserver', '326'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-examples/pve',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-examples/pve', '8b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-examples/pvp',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-examples/pvp', '784'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-extras/concept',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-extras/concept', '5d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-extras/network-settings',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-extras/network-settings', '884'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-extras/order-settings',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-extras/order-settings', '9fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-extras/service-quality',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-extras/service-quality', '8d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-extras/update-settings',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-extras/update-settings', '3a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-others/contributor',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-others/contributor', '6fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/game.openkruise.io/docs/tutorial-others/faq',
        component: ComponentCreator('/game.openkruise.io/docs/tutorial-others/faq', 'ae8'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/game.openkruise.io/',
    component: ComponentCreator('/game.openkruise.io/', '2b2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
