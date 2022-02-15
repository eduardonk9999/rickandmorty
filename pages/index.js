import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Characters from '../src/components/Characters/Characters'
import Header from '../src/components/Header'
import Head from '../src/Infra/components/Head'


export default function Home() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh',
    cache: new InMemoryCache(),
  })
  
  return (
    <>
      <Head title="Rick and Morty" />
      
      <ApolloProvider client={client}>
        <Header />
        <main>
          <p>Pokemons</p>
          <Characters />
        </main>
      </ApolloProvider>
      
    </>
  )
}
