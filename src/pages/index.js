import React from "react"

import Layout from "../components/layout"
import MainHeader from "../components/main"
import Intro from "../components/intro"
import SEO from "../components/seo"
import Courses from "../components/courses"

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
