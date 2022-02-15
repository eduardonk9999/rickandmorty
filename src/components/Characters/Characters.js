import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ITENS } from '../../graphql/get-api'

function Characters() {
  const { data: 
    { pokrmons = [] } = {} 
  } = useQuery(GET_ITENS, {
    variables: {first: 9}
  })

  return(
    <div>
      {console.log(pokrmons)}
    </div>
  )
}

export default Characters