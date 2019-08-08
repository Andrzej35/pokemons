import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import { getPokemonsQuery } from '../queries/queries'


const PokemonList = (props) => {

    const displayPokemons = () => {
        const { pokemons, loading } = props.data
        if (loading) {
            return (<div>loading pokemons ...</div>)
        } else {
            return pokemons.map(pokemon => {
                return (<li key={pokemon.id} >
                    <Link to={`/pokemon/${pokemon.id}`}>
                        <div className="list">
                            <div className="image"><img className="item-image" src={pokemon.image} alt={pokemon.name} /></div>
                            <div className="content"><h3><strong>Name: </strong>{pokemon.name}</h3>
                                <p><strong>Number: </strong>{pokemon.number}</p>
                            </div>
                        </div>
                    </Link>
                </li>)
            })
        }
    }
    return (
        <div>
            <h1>Pokemon's List:</h1>
            <ul className="pokemon-list">
                {displayPokemons()}
            </ul>
        </div>
    )

}

export default graphql(getPokemonsQuery)(PokemonList)
