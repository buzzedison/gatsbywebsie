import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost2 = ({ it }) => {
  const { title, body, image } = it.contentfulTechnology
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h2 className="h2-responsive font-weight-bold text-center my-5">
          {title}
        </h2>
        <center>
          {" "}
          <img
            alt={title}
            src={image.file.url}
            className="container"
            id="blogImg"
          />
        </center>

        <div
          className="container"
          id="content"
          dangerouslySetInnerHTML={{
            __html: body.childContentfulRichText.html,
          }}
        />

        <Link to="/blog" className="container" id="content">
          Back to Insight/Blog
        </Link>
      </div>
    </Layout>
  )
}

export default BlogPost2

export const TechQuery = graphql`
  query($slug: String!) {
    contentfulTechnology(slug: { eq: $slug }) {
      title
      slug

      image {
        file {
          url
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
