import React, { Component } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/layout"
import Logo from "../components/svg/logo"
import Work from "../components/work"
import DotCross from "../components/svg/dotCross"
import Arrow from "../components/svg/arrow"
import Social from "../components/social"
// import SEO from "../components/seo"

export default class IndexPage extends Component {
  componentDidMount() {
    this.aos = AOS
    this.aos.init({
      duration: 2200,
    })
  }

  componentDidUpdate() {
    this.aos.refresh()
  }

  render() {
    return (
      <Layout>
        <nav id="navigation">
          <a className="navigation__logo" href="/">
            <Logo />
          </a>
          <div className="links">
            <ul>
              <li>
                <a href="#about" className="links__text">
                  about
                </a>
              </li>
              <li>
                <a href="#work" className="links__text">
                  work
                </a>
              </li>
              <li>
                <a href="#contact" className="links__text">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="background">
          <div className="background__shapes">
            <div className="donut donut--lg"></div>
            <div className="donut donut--sm"></div>
            <div className="dots dots--lg"></div>
            <div className="dots dots--sm"></div>
            {/* <Arrow className="arrow"></Arrow> */}
            <DotCross className="cross cross--1"></DotCross>
            <DotCross className="cross cross--2"></DotCross>
            <DotCross className="cross cross--3"></DotCross>
            <DotCross className="cross cross--4"></DotCross>
            <DotCross className="cross cross--5"></DotCross>
            <DotCross className="cross cross--6"></DotCross>
          </div>
          <section id="hero" className="hero">
            <div className="heading">
              <div className="divider"></div>
              <h3>Freelance Front-end Developer and Designer</h3>
              <h4>
                Doing my part to make the web a more <b>beautiful</b> and{" "}
                <b>inclusive</b> place for everyone.
              </h4>
            </div>
            <div className="browser">
              <div className="url"></div>
              <div className="bar__wrapper">
                <div className="bar--sm bar-1"></div>
                <div className="bar--lg bar-2"></div>
                <div className="bar--lg bar-3"></div>
                <div className="bar--md bar-4"></div>
                <div className="bar--md bar-5"></div>
                <div className="bar--md bar-6"></div>
                <div className="bar--sm bar-7"></div>
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
              <a href="mailto:hello@nullui.co" className="btn cta__btn">
                Hire me
              </a>
            </div>
          </section>

          <section id="about" className="about">
            <div className="about__wrapper">
              <div className="divider"></div>
              <h1 data-aos="fade-right">
                Alright, I agree. I think it’s best you get to know me first.
              </h1>

              <h4 className="subTitle">01. About</h4>
              <div className="about__text">
                <p>
                  I’m <b>Sam Tancharoensuksavai</b> (sounds like
                  Thun-cha-lawn-sook-sav-i). I’m a
                  <b> Freelance Front-end Developer</b> and <b>Designer</b>{" "}
                  based out of Austin, Texas. I have been writing code for about
                  <em>
                    <b> 6 </b>
                  </em>
                  years (when are you supposed to officially start counting?).
                  I’m in a constant pursuit to fuse my{" "}
                  <b>passion of technology</b> with my
                  <b> love for design</b>. I enjoy blending my broad interests
                  and drawing inspiration from the world around me.
                </p>
                <p>
                  Curious to know a little{" "}
                  <a href="/" className="about__link">
                    more about me
                  </a>
                  ?
                </p>
              </div>
            </div>
          </section>
        </div>

        <Work />

        <section id="contact" className="footer">
          <div className="footer__wrapper">
            <div className="quote">
              <h4 className="subTitle">03. Contact</h4>
              <h1 ddata-aos="fade-right">
                Design is <br />
                by the people
                <br />
                for the people
              </h1>
              <h3 ddata-aos="fade-right">- Judy Wert</h3>
            </div>
            <div className="closing">
              <div className="divider"></div>
              <p>
                I love what I do, and find any opportunity as a new challenge to
                try and deliver a thoughtful and holistic experience for the
                final product, but also for the person or people I’m working
                with.
                <br />
                If you think I might be the right person for the job, feel free
                to drop in and tell me more!
              </p>
              <a href="mailto:hello@nullui.co" className="btn cta__btn">
                Let's Talk
              </a>
              <div className="divider"></div>
              <p>
                If you want to keep up with what I’m working on, or if you just
                want to say ‘Hi’, you can find me on the following platforms.
              </p>
              <Social />
            </div>
          </div>
          <div className="footer__terms">
            <p>&#169; Copyright 2019 nullui</p>
          </div>
        </section>
      </Layout>
    )
  }
}
