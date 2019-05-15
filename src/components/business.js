import React from "react"
import PEOPLE from "../images/people.jpg"
import { MDBContainer, MDBMask, MDBView } from "mdbreact"
class Business extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer fluid>
          <MDBView>
            <img src={PEOPLE} className="img-fluid" alt="" />
            <MDBMask pattern={6} className="flex-center">
              <p className="white-text">
                {" "}
                <h1>
                  <b>Executive Business Education & Coaching</b>
                </h1>
              </p>
            </MDBMask>
          </MDBView>
          <p
            className="h1-responsive font-weight-bold my-5"
            style={{
              fontSize: "30px",
              textAlign: "center",
              paddingTop: "30px",
              paddingRight: "20px",
              paddingLeft: "20px",
            }}
          >
            <b>
              Do you want to start a business and not sure how to get started?
            </b>{" "}
          </p>
          <p style={{ fontSize: "20px", textAlign: "center", padding: "0px" }}>
            {" "}
            Let me help you kick off your business planning from idea to
            implementation and start you on a journey to success
          </p>
        </MDBContainer>
      </div>
    )
  }
}

export default Business
