import React from "react"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBCardGroup,
} from "mdbreact"
import Business from "../images/courses.png"
import Coding from "../images/coding.png"
import God from "../images/God.png"

const Courses = () => {
  return (
    <MDBContainer>
      <MDBCardGroup deck>
        {" "}
        <MDBCard>
          <MDBCardImage className="img-fluid" src={Coding} />
          <MDBCardBody>
            <MDBCardTitle>Learn to Code</MDBCardTitle>
            <MDBCardText>
              JavaScript, React, React Native, Ruby on Rails, Python, Git,
              MongoDB, Node Js, Gatsby. Take your first course for free. Course
              begins May 20, 2019.
            </MDBCardText>
            <MDBBtn href="#" color="primary">
              GO TO COURSES
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard>
          <MDBCardImage className="img-fluid" src={Business} deck />
          <MDBCardBody>
            <MDBCardTitle>Learn about Business</MDBCardTitle>
            <MDBCardText>
              Want to start a business, learn to pitch your business to
              investors, learn to inspire and lead your team, learn to manage
              your business effectively.
            </MDBCardText>
            <MDBBtn href="#" color="primary">
              EXPLORE
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard>
          <MDBCardImage className="img-fluid" src={God} deck />
          <MDBCardBody>
            <MDBCardTitle>Find God here</MDBCardTitle>
            <MDBCardText>
              Open conversation about God. You won't be judged. Want to go into
              ministry? Think you have been called by God? Let us talk.
            </MDBCardText>
            <MDBBtn href="#" color="primary">
              EXPLORE
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  )
}

export default Courses
