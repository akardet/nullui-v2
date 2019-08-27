import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Chevron from "../components/svg/chevron"
import Image from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allContentfulWork(sort: { fields: contentfulid }) {
          edges {
            node {
              id
              title
              subHeading
              heroImage {
                fixed(height: 230) {
                  ...GatsbyContentfulFixed
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
        <h1>
          A collection of things I've made
          <br />
          for myself and for others
        </h1>
        <h4 className="subTitle">02. Work</h4>
        <div className="work__card--wrapper">
          <ul>
            {data.allContentfulWork.edges.map(({ node: card }) => {
              return (
                <li className="work__card">
                  <div className="card--accent"></div>
                  <h2 className="card--title">{card.title}</h2>
                  <h4 className="card--subheading">{card.subHeading}</h4>
                  <div className="view__wrapper">
                    <p>Click to View</p>
                    <Chevron className="view--arrow" />
                  </div>
                  <div className="img__wrapper">
                    <Image className="card--img" fixed={card.heroImage.fixed} />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )}
  />
)
