import React from "react"
import { Disqus } from 'gatsby-plugin-disqus'

const DisqusTemplate = () => {
  let disqusConfig = {
    identifier: post.id,
    title: post.title,
    url: post.url,
  }
  return (
    <>
      <Disqus config={disqusConfig} />
    </>
  )
}

export default DisqusTemplate