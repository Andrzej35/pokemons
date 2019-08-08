import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { getPokemonQuery } from '../queries/queries'

const displayContent = (data) => data.map(x => x).join(', ')

const PokemonDetails = (props) => {
    const { pokemon } = props.data
    if (!pokemon) {
        return <div>loading pokemon's information...</div>
    }
    return (

        <div id="pokemon-details">

            <Link to={`/`}>Go back to Pokemon's list</Link>
            <h1>Pokemon's information</h1>
            <div className="pokemon-details">
                <img src={pokemon.image} alt={pokemon.name} />
                <div className="content-details">
                    <h3>Name: {pokemon.name}</h3>
                    <p>Number: {pokemon.number}</p>
                    <p>Types: {displayContent(pokemon.types)}</p>
                    <p>Resistant: {displayContent(pokemon.resistant)}</p>
                    <p>Weaknesses: {displayContent(pokemon.weaknesses)}</p>
                </div>
            </div>

        </div>
    )
}

PokemonDetails.propTypes = {
    pokemon: PropTypes.object
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
