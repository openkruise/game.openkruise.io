import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单开箱即用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        覆盖PVP/PVE/MMORPG等多种常见的游戏类型的差异化容器需求，白屏化支持复杂游戏架构的游戏服编排能力。
      </>
    ),
  },
  {
    title: '全游戏类型覆盖',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        覆盖PVP/PVE/MMORPG等多种常见的游戏类型的差异化容器需求，白屏化支持复杂游戏架构的游戏服编排能力。
      </>
    ),
  },
  {
    title: '完全免费开源',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        OpenKruiseGame是CNCF顶级开源云原生负载OpenKruise在游戏领域下的最佳实践抽象
      </>
    ),
  },
  {
    title: '云原生能力无感打通',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        通过无侵入式的声明方式与云上能力，例如:透明无损网络、极致秒级弹性、低成本资源供给、全生命周期可观测性等能力无感打通 
      </>
    ),
  },
  {
    title: '内置游戏云原生化最佳实践',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        将游戏场景下的版本热更新、网络IP端口固定、区服管理、自动伸缩等通用能力进行抽象，并通过语义化的配置进行透出，降低学习和二次开发的成本
      </>
    ),
  },
  {
    title: '面向多云/边缘/多集群场景',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       内置多云/混合云场景的适配，推出了Cloud Provider的模型，便于开发者在多种不同云环境下实现游戏的一致性交付
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
