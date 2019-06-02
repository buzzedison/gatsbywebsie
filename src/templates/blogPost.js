import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const { title, body, image, moreImage, summarize } = data.contentfulInsight
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

        <Link to="/insight" className="container" id="content">
          Back to Insight/Blog
        </Link>
      </div>
    </Layout>  
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulInsight(slug: { eq: $slug }) {
      title
      slug

      image {
        file {
          url
        }
      }
      tags

      body {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
