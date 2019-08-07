import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getPokemonsQuery } from '../queries/queries'

import PokemonDetails from './PokemonDetails'

class PokemonList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null,
            name: null
        }
    }
    displayPokemons() {
        const { data } = this.props
        if (data.loading) {
            return (<div>loading pokemons ...</div>)
        } else {
            // console.log(data.pokemons.map(pokemon => pokemon))
            return data.pokemons.map(pokemon => {
                return (<li key={pokemon.id} onClick={(e) => { this.setState({ selected: pokemon.id, name: pokemon.name }) }}>
                    <div className="list">
                        <div className="image"><img className="item-image" src={pokemon.image} alt={pokemon.name} width="100" /></div>
                        <div className="content"><h3><strong>Name: </strong>{pokemon.name}</h3>
                            <p><strong>Number: </strong>{pokemon.number}</p>
                        </div>
                    </div>
                </li>)
            })
        }
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <ul className="pokemon-list">
                    {this.displayPokemons()}
                </ul>
                <PokemonDetails pokemonId={this.state.selected} name={this.state.name} />
            </div>
        )
    }
}

export default graphql(getPokemonsQuery)(PokemonList)
