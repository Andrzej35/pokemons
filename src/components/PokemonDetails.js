import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getPokemonQuery } from '../queries/queries'

class PokemonDetails extends Component {
    displayPokemonDetails() {
        const { pokemon } = this.props.data
        console.log(pokemon)
        if (pokemon) {
            return (
                <>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <h3>{pokemon.name}</h3>
                    <p>{pokemon.number}</p>
                    <p>{pokemon.types}</p>
                    <p>{pokemon.resistant}</p>
                    <p>{pokemon.weaknesses}</p>
                </>
            )
        } else {
            return (<div>No pokemon selected</div>)
        }
    }

    render() {

        return (
            <div id="pokemon-details">
                {this.displayPokemonDetails()}
            </div>
        )
    }
}

export default graphql(getPokemonQuery, {
    options: props => {
        return {
            variables: {
                id: props.pokemonId,
                name: props.name
            }
        }
    }
})(PokemonDetails)
