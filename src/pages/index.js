import React from "react"

import Layout from "../components/layout"
import Logo from "../components/svg/logo"
import Work from "../components/work"
import DotCross from "../components/svg/dotCross"
import Arrow from "../components/svg/arrow"
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
    <div className="background">
      <div className="background__shapes">
        <div className="donut donut--lg"></div>
        <div className="donut donut--sm"></div>
        <div className="dots dots--lg"></div>
        <div className="dots dots--sm"></div>
        {/* <Arrow className="arrow"></Arrow>
        <DotCross className="cross cross--1"></DotCross>
        <DotCross className="cross cross--2"></DotCross>
        <DotCross className="cross cross--3"></DotCross>
        <DotCross className="cross cross--4"></DotCross>
        <DotCross className="cross cross--5"></DotCross> */}
      </div>
      <section id="hero" className="hero">
        <div className="heading">
          <div className="divider"></div>
          <h3>
            Freelance Front-end Developer <br />
            and Designer
          </h3>
          <h4>
            Doing my part to make the web a more <br />
            <b>beautiful</b> and <b>inclusive</b> place for everyone.
          </h4>
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
      </section>

      <section className="about">
        <div className="about__wrapper">
          <h1>
            Alright, I agree. <br />I think it’s best <br /> you get to know{" "}
            <br /> me first.
          </h1>
          <h4>01. About</h4>
          <div className="about__text">
            <p>
              I’m <b>Sam Tancharoensuksavai</b> (sounds like
              Thun-cha-lawn-sook-sav-i). I’m a
              <b> Freelance Front-end Developer</b> and <b>Designer</b> based
              out of Austin, Texas. I have been writing code for about
              <em>
                <b> 6 </b>
              </em>
              years (when are you supposed to officially start counting?). I’m
              in a constant pursuit to fuse my <b>passion of technology</b> with
              my
              <b> love for design</b>. I enjoy blending my broad interests and
              drawing inspiration from the world around me.
            </p>
            <p>
              Curious to know a little{" "}
              <a href="/" className="about__link">
                more about me?
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>

    <section className="work">
      <Work />
    </section>
  </Layout>
)

export default IndexPage
