import React from "react"
import { Link, graphql } from "gatsby"
import { ListGroup, ListGroupItem } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulInsight.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <div className="blogHead" />
      <div className="container" id="content">
        <center>
          <p>
            {" "}
            <h2>{"Insight, Blog, My thoughts, Rantings, Cravings!"}</h2>
          </p>
        </center>
        <ListGroup>
          {" "}
          <ListGroupItem>
            <div className="blogposts" id="content">
              {blogPosts.map(({ node: post }) => (
                <div key={post.id}>
                  <Link to={`/blogPost/${post.slug}`}>{post.title}</Link>
                </div>
              ))}
              <span className="mgBtm__24" />
            </div>
          </ListGroupItem>
        </ListGroup>
      </div>
    </Layout>
  )
}

export default BlogPosts

export const pageQuery = graphql`
  query BlogPostsQuery {
    allContentfulInsight(limit: 1000) {
      edges {
        node {
          title
          slug
          tags
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
