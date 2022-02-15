import gql from "graphql-tag";



export const GET_ITENS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first){
      id,
      name
    }
  }
`