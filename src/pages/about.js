import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function about() {
  return (
    <div>
      <StaticQuery
        query={graphql`
          query {
            backgroundTop: file(relativePath: { eq: "about-top@2x.png" }) {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            profilePic: file(relativePath: { eq: "profile-pic.png" }) {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <div>
            <Navigation />
            <section className="info">
              <div className="info__background">
                <div className="info__bgImg">
                  <Img fluid={data.backgroundTop.childImageSharp.fluid} />
                </div>
              </div>
              <div className="info__wrapper">
                <div className="picture">
                  <Img
                    className="info__profilePic"
                    fluid={data.profilePic.childImageSharp.fluid}
                  />
                </div>
                <div className="info__text">
                  <div className="divider"></div>
                  <p>
                    <b>
                      I believe that design is a fundamental part of the world
                      around us.
                    </b>{" "}
                    It shapes everything we come in contact with, and it’s a
                    medium that can speak across languages and cultures. I’ve
                    opened Pandora’s box and I’m fascinated with learning and
                    understanding how some of the greatest designs came to exist
                    and the people behind them.
                  </p>
                  <p>
                    I graduated with a degree in <b>Computer Science</b> from
                    the University of North Texas and started my career as a
                    <em> back-end developer</em> for a large financial company.
                    I quickly found a love for the world of{" "}
                    <b>front-end development</b> and <b>web design </b>
                    and I’ve been on a never ending journey to make a life for
                    myself around what I love.{" "}
                  </p>
                  <div className="love">
                    <h4>What I love to do</h4>
                    <ul>
                      <li>UI/UX Design</li>
                      <li>Web Design</li>
                      <li>Building Responsive Web Pages</li>
                      <li>Building Identity Systems</li>
                      <li>Web Animations</li>
                    </ul>
                  </div>

                  <div className="code">
                    <h4>I code in</h4>
                    <ul>
                      <li>Semantic HTML & (S)CSS</li>
                      <li>Javascript (ES6+)</li>
                      <li>React</li>
                      <li>Java</li>
                      <li>Spring & Spring Boot</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </div>
        )}
      />
    </div>
  )
}
