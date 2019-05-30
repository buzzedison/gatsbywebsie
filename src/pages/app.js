import React from "react"
import { Router } from "@reach/router" // comes with gatsby v2
import Layout from "../components/layout"
import NavBar from "../components/NavBar"
import Profile from "../pages/Profile"
import Courses from "../components/main" // NOT SHOWN
import PrivateRoute from "../components/PrivateRoute"
import Login from "./login"

// remember everything in /app/* is dynamic now!
const App = () => {
  return (
    <Layout>
      <NavBar />
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PublicRoute path="/app">
          <PrivateRoute path="/" component={Courses} />
          <Login path="/login" />
        </PublicRoute>
      </Router>
    </Layout>
  )
}
function PublicRoute(props) {
  return <div>{props.children}</div>
}

export default App
