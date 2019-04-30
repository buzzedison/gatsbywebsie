import React from "react"
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
} from "mdbreact"
import Layout from "../components/layout"
import HTMLCSS from "../images/htmlcss.png"
import JAVASCRIPT from "../images/javascript.jpg"
import PYTHON from "../images/python.jpg"
import Rt from "../images/react.jpg"
import Drupal from "../images/drupal.jpg"
import Django from "../images/django.png"

const Coding = () => {
  return (
    <Layout>
      <section className="container">
        <h2 className="h1-responsive font-weight-bold my-5">
          Learn to code with edison.
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          I have been teaching people how to code for more than a decade. Took
          some long break in between and started several businesses. I am back
          now. I want to teach 50, 000 people how to code. You can start for
          free, and if you like what you are getting, you can subscribe to my
          paid course.
        </p>
        <p>
          {" "}
          <strong>
            Learn HTML, CSS, JavaScript, React, Python for Data Science, Django,
            Drupal, MongoDB, MySQL, GraphQL all from the comfort of your home
            online.{" "}
          </strong>
        </p>

        <MDBRow className="text-center">
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img src={HTMLCSS} alt="" className="img-fluid" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">LEARN HTML & CSS</h4>
              <p className="grey-text">
                Start from scratch and be able to build professional web pages
                in 60 days. Start for free.
              </p>
              <MDBBtn color="info" size="sm">
                <MDBIcon far icon="clone" className="left" />
                SIGN UP NOW!
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img src={JAVASCRIPT} alt="" className="img-fluid" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">Learn JavaScript</h4>
              <p className="grey-text">
                JavaScript has evolved into the language of choice in many
                fullstack web development projects.
              </p>
              <p>
                {" "}
                <MDBBtn color="info" size="sm">
                  <MDBIcon far icon="clone" className="left" /> SIGN UP NOW!
                </MDBBtn>
              </p>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img src={PYTHON} alt="" className="img-fluid" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">Python for Beginners</h4>
              <p className="grey-text">
                Learn python by working on 20 projects in 90 days. We will hold
                your hands all the way.
              </p>
              <MDBBtn color="info" size="sm">
                <MDBIcon far icon="clone" className="left" /> SIGN UP NOW!
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
        <p>
          <MDBRow className="text-center">
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img src={Rt} alt="" className="img-fluid" />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">React JS</h4>
                <p className="grey-text">
                  Learn to build Modern Web apps and great front end web
                  development using React.
                </p>
                <MDBBtn color="info" size="sm">
                  <MDBIcon far icon="clone" className="left" /> SIGN UP NOW!
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img src={Drupal} alt="" className="img-fluid" />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Drupal</h4>
                <p className="grey-text">
                  If you were on the lookout for a Drupal tutorial for beginners
                  to build your very own website, then you have landed at just
                  the right place.
                </p>
                <MDBBtn color="info" size="sm">
                  <MDBIcon far icon="clone" className="left" /> SIGN UP NOW!
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img
                  src={Django}
                  alt=""
                  className="img-fluid"
                  style={{ border: "1px solid", padding: 10 }}
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Django</h4>
                <p className="grey-text">
                  Build a web app with Django // The #1 Web Development
                  Framework for Python.
                </p>
                <MDBBtn color="info" size="sm">
                  <MDBIcon far icon="clone" className="left" /> SIGN UP NOW!
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </p>
      </section>
    </Layout>
  )
}

export default Coding
