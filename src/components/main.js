import React from "react"
import { Row, Col } from "reactstrap"
import { Card, CardGroup, Button, Form, FormControl } from "react-bootstrap"

import Photo from "../images/edison.png"
import Courses from "../images/courses.png"
import Coding from "../images/coding.png"

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
            <CardGroup>
              <Card border="0">
                <Card.Img variant="top" src={Courses} />
                <Card.Body>
                  <Card.Title>
                    <strong>Learn about Business</strong>
                  </Card.Title>
                  <Card.Text>
                    Want to start a business, learn to pitch your business to
                    investors, learn to inspire and lead your team, learn to
                    manage your business effectively.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary"> Find out more </Button>
                </Card.Footer>
              </Card>

              <Card>
                <Card.Img variant="top" src={Coding} />
                <Card.Body>
                  <Card.Title>
                    <strong>Learn to Code</strong>{" "}
                  </Card.Title>
                  <Card.Text>
                    JavaScript, React, React Native, Ruby on Rails, Python, Git,
                    MongoDB, Node Js, Gatsby. Take your first course for free.
                    Course begins May 20, 2019.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary"> Find out more </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col sm={7}>
            <h2> Insight and Resources</h2>
          </Col>
          <Col sm={5}>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Find it here!"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm="auto">
            <div className="home">
              <Link to="/blogPost/when-you-are-not-allowed-a-sit-at-the-table-build-your-own-table">
                <p>
                  When you are not allowed a sit at the table, build your own
                  table
                </p>{" "}
              </Link>
              <div>
                <div
                  style={{
                    maxWidth: `300px`,
                    margin: "0 auto 1.45rem",
                  }}
                />
              </div>
              <Link to="/blog/">View all posts</Link>
            </div>
          </Col>

          <Col sm="auto">
            <hr />
            <h4> In the News </h4>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MainHeader
