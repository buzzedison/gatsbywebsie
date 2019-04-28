import React from "react"
import { BrowserRouter } from "react-router-dom"
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact"

const Footer = () => {
  return (
    <BrowserRouter>
      <MDBNav className="justify-content-center" color="amber">
        <MDBNavItem>
          <MDBNavLink to="#!">Home</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#!">Courses</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#!">Insight</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#!">Events</MDBNavLink>
        </MDBNavItem>
      </MDBNav>
    </BrowserRouter>
  )
}

export default Footer
