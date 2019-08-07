import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import PokemonList from './components/PokemonList'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Pokemons</h1>
        <PokemonList />
      </div>
    </ApolloProvider>
  );
}

export default App
