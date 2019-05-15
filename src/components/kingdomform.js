import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact"
import NetlifyForm from "react-netlify-form"

class KingdomForm extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer style={{ maxWidth: "750px" }}>
          <center>
            <MDBRow>
              <MDBCol md="10">
                <NetlifyForm
                  name="Kingdom Culture Conference"
                  onSubmit={this.handleSubmit}
                >
                  {({ loading, error, success }) => (
                    <div>
                      {loading && <div>Loading...</div>}
                      {error && (
                        <div>
                          Your information was not sent. Please try again later.
                        </div>
                      )}
                      {success && (
                        <div>
                          <h4>
                            Thank you for your interest to attend the Executive
                            business course and coaching
                          </h4>
                        </div>
                      )}
                      {!loading && !success && (
                        <div>
                          <p className="h1 text-center mb-4">Sign up now</p>
                          <label
                            htmlFor="defaultFormRegisterNameEx"
                            className="grey-text"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="defaultFormRegisterNameEx"
                            className="form-control"
                            name="name"
                            onChange={this.handleChange}
                            required
                          />
                          <br />
                          <label
                            htmlFor="defaultFormRegisterEmailEx"
                            className="grey-text"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="defaultFormRegisterEmailEx"
                            className="form-control"
                            name="email"
                            onChange={this.handleChange}
                            required
                          />
                          <br />

                          <label htmlFor="phonenumber" className="grey-text">
                            Contact Number
                          </label>
                          <input
                            type="number"
                            id="phonenumber"
                            className="form-control"
                            name="phonenumber"
                            onChange={this.handleChange}
                            required
                          />
                          <br />

                          <label
                            htmlFor="defaultFormContactMessageEx"
                            className="grey-text"
                          >
                            Why do you want to attend the Kingdom Culture
                            Conference?
                          </label>
                          <textarea
                            type="text"
                            id="defaultFormContactMessageEx"
                            className="form-control"
                            name="message"
                            rows="3"
                            onChange={this.handleChange}
                            required
                          />
                          <br />

                          <div className="text-center mt-4">
                            <MDBBtn color="danger" type="submit">
                              REGISTER NOW
                            </MDBBtn>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </NetlifyForm>
              </MDBCol>
            </MDBRow>
          </center>
        </MDBContainer>
      </div>
    )
  }
}

export default KingdomForm
