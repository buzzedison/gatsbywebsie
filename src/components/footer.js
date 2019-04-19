import React from "react"

import { Navbar, Nav } from "react-bootstrap"

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">BuzzEdison</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Learn</Nav.Link>
            <Nav.Link href="#pricing">Insight</Nav.Link>
            <Nav.Link href="#pricing">Ministry</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Footer
