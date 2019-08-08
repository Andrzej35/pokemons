import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import Error404 from './components/Error404'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql'
})



const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={PokemonList} />
            <Route path="/pokemon/:id" exact component={PokemonDetails} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App
