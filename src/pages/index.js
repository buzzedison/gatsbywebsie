import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainHeader from "../components/main"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`IT courses`, `Business development`, `react`]}
    />
    <MainHeader />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />

    <Link to="/blog">Go to page 2</Link>
  </Layout>
)

export default IndexPage
