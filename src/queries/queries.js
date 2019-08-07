import { gql } from 'apollo-boost'

export const getPokemonsQuery = gql`
{
    pokemons(first: 151) {
        image
        number
        name
    }
}
`

export const getPokemonQuery = gql`
    query($id: ID, $name: String) {
        pokemon(id: $id, name: $name) {
            image
            number
            name
            types
            resistant
            weaknesses
        }
    }
`
