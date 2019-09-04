import React, { Component } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { StaticQuery, graphql } from "gatsby"

import Chevron from "../components/svg/chevron"
import Image from "gatsby-image"

export default class Work extends Component {
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
      <StaticQuery
        query={graphql`
          query {
            allContentfulWork(sort: { fields: contentfulid }) {
              edges {
                node {
                  id
                  title
                  subHeading
                  heroImage {
                    fluid(maxWidth: 320) {
                      ...GatsbyContentfulFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <section id="work" className="work">
            <div className="work__shapes">
              <div className="sphere sphere--lg sphere-1"></div>
              <div className="sphere sphere--lg sphere-2"></div>
              <div className="sphere sphere--md sphere-3"></div>
              <div className="sphere sphere--md sphere-4"></div>
              <div className="sphere sphere--sm sphere-5"></div>
            </div>
            <div className="divider"></div>
            <h1 data-aos="fade-right">
              A collection of things I've made for myself and for others
            </h1>
            <h4 className="subTitle">02. Work</h4>
            <div className="cards__wrapper">
              <ul data-aos="fade-up" data-aos-delay="300">
                {data.allContentfulWork.edges.map(({ node: card }) => {
                  return (
                    <li className="card">
                      <a href="/" className="card__link">
                        <h2 className="card__title">{card.title}</h2>
                        <h4 className="card__subheading">{card.subHeading}</h4>
                        <div className="card__view">
                          <p>Click to View</p>
                          <Chevron className="arrow" />
                        </div>
                        <div className="card__img">
                          <Image fluid={card.heroImage.fluid} />
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        )}
      />
    )
  }
}
