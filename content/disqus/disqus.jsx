import React from "react"
import { graphql } from "gatsby"
import { Disqus } from 'gatsby-plugin-disqus'

const DisqusTemplate = () => {
  const canonicalUrl = data.site.siteMetadata.siteURL + location.pathname
  let disqusConfig = {
    url: canonicalUrl,
  }
  return (
    <>
      <Disqus config={disqusConfig} />
    </>
  )
}

export default DisqusTemplate

export const query = graphql`
  query DisqusTemplateQuery {
    site {
      siteMetadata {
        siteURL
      }
    }
  }
`