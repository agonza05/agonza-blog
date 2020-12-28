import React from "react"
import { graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"

const DisqusTemplate = ({ data, location }) => {
  console.log(data)
  const siteUrl = data.site.siteMetadata.siteUrl
  const disqusConfig = {
    url: `${siteUrl+location.pathname}`,
  }
  return (
    <>
      <Disqus config={disqusConfig} />
    </>
  )
}

export default DisqusTemplate

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`