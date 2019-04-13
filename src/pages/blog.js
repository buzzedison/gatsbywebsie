import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import get from "lodash/get"

class Blog extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allContentfulInsight.edges")

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `Insight`, `Leadership`, `Development`]}
        />

        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div key={node.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.date}</small>
              <p>{node.title} </p>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulInsight {
      edges {
        node {
          title
          slug
          image {
            fluid {
              src
            }
          }
          body {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`
