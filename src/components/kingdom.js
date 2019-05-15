import React from "react"
import KINGDOM from "../images/kingdom2.png"
import { MDBContainer, MDBView } from "mdbreact"
class Kingdom extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBView>
            <img src={KINGDOM} className="img-fluid" alt="" />
          </MDBView>
          <p
            className="h1-responsive font-weight-bold my-5"
            style={{
              fontSize: "30px",
              textAlign: "center",
              paddingTop: "30px",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <h1>
              {" "}
              <b>The Kingdom Culture Conference</b>
            </h1>
            <b>
              Are you a Christian leader, pastor, youth ministry leader,
              envangelist, worship leader ?
            </b>{" "}
          </p>
          <p style={{ fontSize: "20px", textAlign: "center", padding: "0px" }}>
            {" "}
            Attend the Kingdom Culture Conference. We want to download and
            execute God's blueprint on earth. We are tired of just playing
            church. The Church is an agency and agent of change. Attend this
            conference to be equipped with the tools to make transformational
            impact in your ministry.
          </p>
          <center>
            {" "}
            <h3>July, 6, 2019. Airport West Hotel. 10am. </h3>{" "}
          </center>
        </MDBContainer>
      </div>
    )
  }
}

export default Kingdom
