import React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <nav id="navigation">
      <a href="/">
        <Logo />
      </a>
      <div className="menu">
        <div className="menu__icon">
          <div className="line--top"></div>
          <div className="line--mid"></div>
          <div className="line--btm"></div>
        </div>
      </div>
    </nav>

    <section id="hero" className="hero">
      <div className="foreground">
        <div className="heading">
          <h4>Freelance Front-end Developer and Designer</h4>
          <h2>
            I set <span className="ugly">ugly</span> web pages on fire and{" "}
            <br /> make <span className="pretty">beautiful </span>
            and
            <span className="pretty"> impactful</span> websites <br />
            from the ashes
          </h2>
        </div>
        <div className="browser">
          <div className="url"></div>
          <div className="bar__wrapper">
            <div className="bar--sm"></div>
            <div className="bar--lg"></div>
            <div className="bar--lg"></div>
            <div className="bar--md"></div>
            <div className="bar--md"></div>
            <div className="bar--md bar--mdView"></div>
            <div className="bar--sm bar--lgView"></div>
          </div>
          <div className="panel__wrapper">
            <div className="panel"></div>
            <div className="panel"></div>
          </div>
          <div className="sphere"></div>
          <div className="dots"></div>
        </div>
        <div className="cta">
          <p>
            Got a website that could use some T.L.C? <br /> Don't go chasing
            waterfalls
          </p>
          <button className="cta__btn">Hire me</button>
        </div>
      </div>
      <div className="background">
        <div className="donut donut--lg"></div>
        <div className="donut donut--sm"></div>
        <div className="dots dots--lg"></div>
        <div className="dots dots--sm"></div>
      </div>
    </section>

    <section className="about">
      <div className="about--block_left">
        <h2>
          Alright, I agree. <br />I think it’s best <br /> you get to know{" "}
          <br /> me first.
        </h2>
      </div>
      <div className="about--block_right">
        <h3>01. About</h3>
        <p>
          I’m Sam Tancharoensuksavai it sounds like Thun-cha-lawn-sook-sav-i.
          I’m a Freelance Front-end Developer and Designer based out of Austin,
          Texas. I have been writing code for about 6 years (when are you
          supposed to officially start counting?). That includes my time as a
          primarily back-end developer at a Fortune 100 company refactoring
          legacy Java code, securing APIs and shipping lightweight microservices
          into production. <br /> <br />
          At my time there, I quickly developed a love for the front-end. I saw
          it as my chance to flex the more creative and artsy part of my brain,
          and that’s my favorite part of my brain to flex! I knew I had to
          pursue this, so I learned some HTML, some CSS, got acquainted Gatsby
          and fast forward to today, I’m hustlin’ the freelance market and
          looking to work with good people doing cool things. If you meet those
          two criteria, feel free to reach out and lets get acquainted like me
          and my friend Gatsby.
        </p>
        <div className="about--link">
          <a href="/">More about me</a>
          <div className="bar"></div>
        </div>
      </div>
    </section>

    <section className="work"></section>
  </Layout>
)

export default IndexPage
