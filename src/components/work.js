import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allContentfulWork {
          edges {
            node {
              title
              subHeading
            }
          }
        }
      }
    `}
    render={data => (
      <h3>
        {data.allContentfulWork.edges.map(({ node: card }) => {
          return <p>{card.title}</p>
        })}
      </h3>
    )}
  />
)
