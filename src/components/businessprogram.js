import React from "react"
import { MDBRow, MDBCol, MDBIcon } from "mdbreact"

const BusinessProgram = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        Proven Practices, Sound advice.
      </h2>
      <p
        className="light black-text w-responsive mx-auto mb-3"
        style={{ paddingRight: "10px" }}
      >
        This program provides a practical overview of the fundamentals required
        to start and manage a business. Starts July, 2019 at The Career Hub,
        Adenta (4 weeks). GHC 150 only.{" "}
        <strong>
          Second session (September, 2019): Airport West Hotel. GHC 750 only
        </strong>
      </p>

      <MDBRow
        style={{
          backgroundColor: "#333",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <MDBCol md="4">
          <MDBIcon icon="balance-scale" size="3x" className="yellow-text" />
          <h5 className="font-weight-bold my-4 yellow-text">
            Program Overview
          </h5>
          <p className="grey-text mb-md-0 mb-5">
            Financial Projection and funding services, design thinking and
            prototyping, idea generation, negotation skills, time & performance
            management, business story telling, the art of selling, how to
            innovate and create value. learn about a wide variety of tools,
            techniques and best practices.
          </p>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon icon="drum" size="3x" className="yellow-text" />
          <h5 className="font-weight-bold my-4 yellow-text">Timeline</h5>
          <p className="grey-text mb-md-0 mb-5">
            Attend any of two dates. July 13, 2019 (The Career Hub, Adenta.) or
            September 14, 2019 (Airport West Hotel). Course and coaching is for
            One month.
            <p> Once a week(on weekends) and twice a week on (weekdays)</p>
          </p>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon far icon="cocktail" size="3x" className="yellow-text" />
          <h5 className="font-weight-bold my-4 yellow-text">Key Benefits</h5>
          <p
            className="grey-text mb-md-0 mb-5"
            style={{ paddingRight: "10px" }}
          >
            You learn better by actually doing. You get to start your business
            in this period or learn to better manage your existing business. We
            will do some talking, but we will get down to doing most of the
            time. Get real results for your business. Certificate of
            participation awarded at the end. Free business coaching for 30 days
            after the training.
          </p>
        </MDBCol>
      </MDBRow>
    </section>
  )
}

export default BusinessProgram
