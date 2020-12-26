import { Disqus } from 'gatsby-plugin-disqus'

const DisqusTemplate = () => {
  let disqusConfig = {
    url: `${config.siteUrl+location.pathname}`,
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