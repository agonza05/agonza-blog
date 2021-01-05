/** @jsx jsx */
import { jsx, Link } from "theme-ui"

const Footer = () => {

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by Dull Networking. All rights reserved.
      </div>
      <div>
        Credits:
        {` `}
        <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          Theme
        </Link>
      </div>
    </footer>
  )
}

export default Footer