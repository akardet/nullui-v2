import React, { Component } from "react"
import { Link } from "gatsby"

import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Work from "../components/work"
import DotCross from "../components/svg/dotCross"
import SEO from "../components/seo"

export default class IndexPage extends Component {
  componentDidMount() {
    this.aos = AOS
    this.aos.init({
      duration: 1500,
    })
  }

  componentDidUpdate() {
    this.aos.refresh()
  }

  render() {
    return (
      <Layout>
        <SEO />
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
          <Navigation />
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
                Alright, I agree.
                <br /> I think it’s best you get to know me first.
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
                  <Link className="about__link" to={`/about`}>
                    more about me?
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>

        <Work />

        <Footer />
      </Layout>
    )
  }
}
