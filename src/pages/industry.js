import React from "react"
import Layout from "../components/layout"
import IndustryList from "../components/industry/IndustryList"
import Hero from "../components/header/Hero"
import Banner from "../components/header/Banner"
import Snapshot from "../components/report/Snapshot"

const industry = () => {
  return (
    <Layout>
      <Hero>
        <Banner>
          <Snapshot hawaii="190 +34%" nation="190 +34%" world="190 +34%" />
        </Banner>
      </Hero>
      <IndustryList />
    </Layout>
  )
}

export default industry
