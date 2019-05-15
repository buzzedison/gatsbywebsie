import React from "react"
import Layout from "../components/layout"
import Kingdom from "../components/kingdom"
import KingdomForm from "../components/kingdomform"

class KingdomPage extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Kingdom />
          <KingdomForm />
        </Layout>
      </div>
    )
  }
}

export default KingdomPage
