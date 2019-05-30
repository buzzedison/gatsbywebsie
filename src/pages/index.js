import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "mdbreact/dist/css/mdb.css"
import Layout from "../components/layout"
import MainHeader from "../components/main"
import Intro from "../components/intro"
import SEO from "../components/seo"
import Courses from "../components/courses"
// Other imports
import netlifyIdentity from "netlify-identity-widget"
var buttons = document.createElement("div")
// Make netlifyIdentity accessible in the browser console
window.netlifyIdentity = netlifyIdentity

netlifyIdentity.init()

const IndexPage = () => (
  <div>
    <Layout>
      <SEO
        title="Home"
        keywords={[`IT courses`, `Business development`, `react`]}
      />
      <Intro />
      <MainHeader />
      <Courses />
    </Layout>
  </div>
)

export default IndexPage
