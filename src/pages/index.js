import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
// import Trips from "../components/Trips"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    {/* <Trips  /> */}
    <Testimonials/>
    <Stats/>
  </Layout>
)

export default IndexPage
