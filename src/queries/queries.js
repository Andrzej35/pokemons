import { gql } from 'apollo-boost'

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
