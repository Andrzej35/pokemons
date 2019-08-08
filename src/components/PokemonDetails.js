import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { getPokemonQuery } from '../queries/queries'

const PokemonDetails = (props) => {
    console.log(props)
    const { pokemon } = props.data
    if (!pokemon) {
        return <div>pokemon is loading...</div>
    }
    return (

        <div id="pokemon-details">

            <Link to={`/`}>Go back to Pokemon's list</Link>
            <h1>Pokemon's details</h1>
            <div className="pokemon-details">
                <img src={pokemon.image} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
                <p>{pokemon.number}</p>
                <p>{pokemon.types}</p>
                <p>{pokemon.resistant}</p>
                <p>{pokemon.weaknesses}</p>
            </div>

        </div>
    )
}

export default graphql(getPokemonQuery, {
    options: props => {
        return {
            variables: {
                id: props.match.params.id
            }
        }
    }
})(PokemonDetails)
