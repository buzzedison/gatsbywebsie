import React from "react"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
} from "mdbreact"
import { Link, graphql } from "gatsby"
import Inspire from "../images/inspire.png"
import Layout from "../components/layout"
import God from "../images/God.png"
import Tech from "../images/tech.jpg"

const Insight = ({ data }) => {
  const InsightBlog = data.allContentfulInsight.edges
  return (
    <Layout>
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="text-center">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Insight, Blog, My thoughts, Rantings, Cravings!
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            A lot goes on in my head, and it is nice to be able to share them
            here. I promise to share my passion, cravings, frustrations, and
            know-how with you. Thank you for taking your time to read a part of
            me.
          </p>
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img className="img-fluid" src={Inspire} alt="inspire" />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <a href="#!" className="pink-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="map" className="pr-2" />
                  Inspirational
                </h6>
              </a>
              <p className="font-weight-bold mb-3">
                <strong>
                  {InsightBlog.map(({ node: blog }) => (
                    <div key={blog.id}>
                      <Link to={`/blogPost/${blog.slug}`}>{blog.title}</Link>
                    </div>
                  ))}
                </strong>
              </p>

              <MDBBtn color="secondary" rounded size="md">
                Read more
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src={Tech}
                  alt="technology"
                  style={{ border: "1px solid lightgrey" }}
                />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <a href="#!" className="deep-orange-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="graduation-cap" className="pr-2" />
                  Technology
                </h6>
              </a>
              <h4 className="font-weight-bold mb-3">
                <strong>Learn to Code in 365 days</strong>
              </h4>

              <p className="dark-grey-text">
                Find articles about Technology, Innovaiton, Coding and a lot
                more.
              </p>
              <MDBBtn color="secondary" rounded size="md">
                Read more
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img className="img-fluid" src={God} alt="find God" />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <a href="#!" className="blue-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="fire" className="pr-2" />
                  Find God
                </h6>
              </a>
              <h4 className="font-weight-bold mb-3">
                <strong>Let's talk about God</strong>
              </h4>

              <p className="dark-grey-text">
                I am Christian, but keep an open mind when reading. Don't get
                scared. Just heated conversations. That is all there is to it.
              </p>
              <MDBBtn color="secondary" rounded size="md">
                Read more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </Layout>
  )
}

export default Insight

export const pageQuery = graphql`
  query InsightQuery {
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
