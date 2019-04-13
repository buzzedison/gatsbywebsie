import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
import Img from "gatsby-image"
import Layout from "../components/layout"

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulInsight")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.Image.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: "block",
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childContentfulRichText.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulInsight(slug: { eq: $slug }) {
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
`