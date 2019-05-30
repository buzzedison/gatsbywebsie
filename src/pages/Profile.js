import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Profile = () => (
  <Layout>
    <SEO title="Page two" />

    <p>Your Profile</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Profile