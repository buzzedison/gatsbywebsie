import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const InsightPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Insight`, `Resources`, `Articles`]} />
    <div className="container">
      <p>
        Insight. Want to start a business, learn to pitch your business to
        investors, learn to inspire and lead your team, business development.{" "}
      </p>
    </div>
  </Layout>
)

export default InsightPage
