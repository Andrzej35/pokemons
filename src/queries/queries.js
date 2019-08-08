import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

export const getPokemonsQuery = gql`
{
    pokemons(first: 151) {
        image
        number
        name
        id
    }
}
`

export const getPokemonQuery = gql`
    query($id: String) {
        pokemon(id: $id) {
            image
            number
            name
            types
            resistant
            weaknesses
        }
    }
`

export const Pokemon = ({ id }) => (

    <Query query={getPokemonQuery} variables={{ id }}>
        {({ loading, error, data }) => {
            if (loading) return 'loading pokemon\'s information...';
            if (error) return `Error!`;

            return (
                <p>
                    {data.pokemon.name}
                </p>
            );
        }}
    </Query>
)
