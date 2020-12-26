import { Disqus } from 'gatsby-plugin-disqus'

const DisqusTemplate = () => {
  let disqusConfig = {
    url: post.canonicalUrl,
    identifier: post.id,
    title: post.title,
  }
  return (
    <>
      <Disqus config={disqusConfig} />
    </>
  )
}

export default DisqusTemplate