import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import Heading from "@theme/Heading"
import Translate, { translate } from "@docusaurus/Translate"

import styles from "./index.module.css"
import { UsersComp } from '@site/src/components/Users'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.flex)}>
        <div>
          <Heading as="h1" className={clsx("hero__title", styles.smallerTitle)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx("hero__subtitle", styles.smallerWhenMobile)}>
            <Translate>OceanBase is an enterprise-grade open source distributed SQL database. Unlimited scalable distributed database for data-intensive transactional and real-time operational analytics workloads, with ultra-fast performance that has once achieved world records in the TPC-C benchmark test. OceanBase has served over 1000 customers across the globe and has been supporting all mission critical systems in Alipay.</Translate>
          </p>
          <div className={clsx(styles.buttons)}>
            <Link
              className="button button--secondary margin-vert--md"
              to="docs/tutorial/intro"
            >
              <Translate>Learn about</Translate> OceanBase
            </Link>
            <span style={{display: 'inline-flex', alignItems: 'center'}}>
              <a href="https://github.com/oceanbase/oceanbase" className="margin-horiz--sm" style={{display: 'inline-flex', alignItems: 'center'}}>
                <img alt="stars" src="https://img.shields.io/badge/dynamic/json?color=white&label=stars&query=stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Foceanbase%2Foceanbase" />
              </a>
              <a href="https://github.com/oceanbase/oceanbase" className='margin-horiz--sm' style={{display: 'inline-flex', alignItems: 'center'}}>
                <img alt="forks" src="https://img.shields.io/badge/dynamic/json?color=white&label=forks&query=forks_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Foceanbase%2Foceanbase" />
              </a>
            </span>
          </div>
        </div>
        <img src={require("./astro.png").default} alt="Astronaut Logo" className={styles.astro} />
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="OceanBase is an enterprise distributed relational database."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <UsersComp />
      </main>
    </Layout>
  )
}