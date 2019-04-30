import React from "react"
import { BrowserRouter } from "react-router-dom"
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact"

const Footer = () => (
  <BrowserRouter>
    <MDBNav
      className="justify-content-center"
      style={{
        backgroundColor: "lightgrey",
        marginTop: 30,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
      }}
    >
      <MDBNavItem>
        <MDBNavLink to="/">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/learn">Learn</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/blog">Insight</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/bible">Find God</MDBNavLink>
      </MDBNavItem>
    </MDBNav>
  </BrowserRouter>
)

export default Footer
