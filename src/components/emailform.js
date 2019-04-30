import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact"

const EmailForm = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign up to my mailing list</p>
            <div className="grey-text">
              <MDBInput
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
            </div>
            <div className="text-center">
              <MDBBtn color="info">Sign up</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default EmailForm
