import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/header/Hero"
import Banner from "../components/header/Banner"
import Snapshot from "../components/report/Snapshot"
import Search from "../components/search/Search"
import IndustryList from "../components/industry/IndustryList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Banner>
        <Snapshot hawaii="190 +34%" nation="190 +34%" world="190 +34%" />
        <Search />
      </Banner>
    </Hero>
    <IndustryList />
  </Layout>
)

export default IndexPage
