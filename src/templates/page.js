import React from 'react'
import { ThemedContent } from '../styles/theme'

const Page = (data) => {
  console.log(data)
  return(
    <ThemedContent>
      <div
        dangerouslySetInnerHTML={{__html: data.pathContext.html}}
      />
    </ThemedContent>
  )
}

export default Page