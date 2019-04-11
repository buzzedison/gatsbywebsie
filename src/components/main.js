import React from "react"
import { Row, Col } from "reactstrap"
import {
  Card,
  CardGroup,
  Button,
  Form,
  FormControl,
  ListGroup,
} from "react-bootstrap"

import Photo from "../images/edison.png"
import Courses from "../images/courses.png"
import Coding from "../images/coding.png"

class MainHeader extends React.Component {
  render() {
    return (
      <div class="maincontainer" id="maincontent">
        <Row>
          <Col xs="6">
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
          <Col xs="6">
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={Courses} />
                <Card.Body>
                  <Card.Title>
                    <strong>Learn about Business</strong>
                  </Card.Title>
                  <Card.Text>
                    Want to start a business, learn to pitch your business to
                    investors, learn to inspire and lead your team, business
                    development.
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
                    avaScript, React, Ruby on Rails, Python. Take your first
                    course for free. Course begins May 20, 2019.
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
          <Col xs="6">
            <h2> Insight and Resources</h2>
          </Col>
          <Col xs="6">
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
          <Col xs="6">
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action href="#link1">
                When you are not allowed a sit at the table, build your own
                table
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" disabled>
                BE YOUR OWN INSPIRATION
              </ListGroup.Item>
              <ListGroup.Item action>
                How failure can teach you so much about success
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs="6">
            <hr />
            <h4> In the News </h4>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MainHeader
