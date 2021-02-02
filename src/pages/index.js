import * as React from "react"
import { ThemedContent } from "../styles/theme"

// markup
const IndexPage = () => {
  return (
    <ThemedContent>
      <h1>Hello World!</h1>
      <p>Try navigating to /test</p>
      <p>Now, in a new tab, try navigating to /admin and change the /test page using the CMS</p>
      <p>Wait a minute for the site to re-build, then reload the page</p>
      <p>The content should reflect the changes you made!</p>
    </ThemedContent>
  )
}

export default IndexPage
