import React from "react"
import Layout from "../components/layout"
import Business from "../components/business"

import BusinessProgram from "../components/businessprogram"
import { MDBCol } from "mdbreact"
import BusinessForm from "../components/businessform"

class BusinessPage extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Business />
          <BusinessProgram />
          <center>
            {" "}
            <MDBCol sm={10}>
              <BusinessForm />
            </MDBCol>
          </center>
        </Layout>
      </div>
    )
  }
}

export default BusinessPage
