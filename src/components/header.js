import PropTypes from "prop-types"
import React, { Component } from "react"
import logo from "../images/logo.png"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div className="container">
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/insight">Insight</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Learn
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {" "}
                    <NavLink href="/coding">Coding </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Business</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Ministry</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/expert">Expertise</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/ministry">Ministry</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/media">Media</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/events">Events</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/store">Store</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
