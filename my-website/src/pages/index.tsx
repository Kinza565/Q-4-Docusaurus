import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroDarkGradient, "hero")}>
      <div className="container text--center">

        {/* 🔥 BIG TITLE */}
        <Heading as="h1" className={styles.bigTitle}>
          {siteConfig.title}
        </Heading>

        {/* ✨ AESTHETIC SUBHEADING */}
        <p className={styles.aestheticSubtitle}>
          {siteConfig.tagline}
        </p>

        {/* CTA BUTTON */}
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Start Reading →
          </Link>
        </div>

        {/* 👩‍💻 Developer-Focused Tagline */}
        <p className={styles.devTagline}>
          Crafted for Developers • Aesthetic Experience • Book-Style Learning
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A modern, aesthetic, developer-focused documentation experience"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
