import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <div
    className="myMenu"
    style={{
      background: "transparent",
      paddingTop: "10px",
      display: "flex",
    }}
  >
    {" "}
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          paddingLeft: "10px",
        }}
      >
        <li>
          {" "}
          <Link to="/"> Home </Link>
        </li>
        <li>
          {" "}
          <Link to="/courses"> Learn </Link>
        </li>
        <li>
          {" "}
          <Link to="/insight"> Insight</Link>
        </li>
        <li>
          {" "}
          <Link to="/expertise"> Expertise </Link>
        </li>
        <li>
          {" "}
          <Link to="/media"> Media </Link>
        </li>
        <li>
          {" "}
          <Link to="/events"> Events </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Menu
