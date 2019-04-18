import React from "react"
import { Row, Col } from "react-bootstrap"
import Button from "@material-ui/core/Button"
import SideIntro from "../components/sideIntro"

class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <div>
          <Row>
            <Col sm={7}>
              {" "}
              <h2 className="introText">
                {" "}
                <strong>
                  {" "}
                  Insight, Courses, Ministry, Resources, News, Events
                </strong>
              </h2>
              <p className="introP">
                {" "}
                Here you can strengthen your gifts, develop your tech and
                business skills, find God, or get inspired to be an instrument
                of change in your community.
              </p>
              <Button
                variant="contained"
                color="primary"
                className="introB"
                size="large"
                style={{ marginLeft: "60px" }}
              >
                Find out more
              </Button>
            </Col>
            <Col sm={5}>
              {" "}
              <div className="introS">
                <SideIntro />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Intro
