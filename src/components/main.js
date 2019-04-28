import React from "react"
import { Row, Col } from "reactstrap"
import { Card } from "react-bootstrap"
import { MDBBtn, MDBJumbotron, MDBContainer } from "mdbreact"
import Photo from "../images/edison.png"

import { Link } from "gatsby"

class MainHeader extends React.Component {
  render() {
    return (
      <div class="container" id="content">
        <Row>
          <Col sm={6}>
            <Card>
              <Card.Img variant="top" src={Photo} />
              <Card.Body>
                <Card.Text>
                  Spark your career or calling with personal, business coaching
                  and mentoring from Edison.
                  <strong>
                    More than 12 years of business experience across three
                    continents.
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <MDBContainer>
              <MDBJumbotron style={{ backgroundColor: "white" }}>
                <h1 className="h1-responsive">My Services</h1>
                <p className="lead">
                  Professional speaker, igniting innovation mindset in
                  organizations, helping people and businesses design things
                  that matter. Life coach, business storytelling coaching,
                  training in ICT, business, and christian leadership
                </p>
                <hr className="my-2" />
                <p>
                  <strong>Chief doer of random things </strong>
                </p>
                <MDBBtn color="primary" size="lg">
                  Learn more
                </MDBBtn>
              </MDBJumbotron>
            </MDBContainer>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
      </div>
    )
  }
}

export default MainHeader
