import { defaultHead } from 'next/head'
import React from 'react'


function Head({title}) {
  return (
    <>
      <defaultHeadad>
        <title>
          {title}
        </title>
      </defaultHeadad>
    </>
  )
}

export default Head