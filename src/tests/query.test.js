import React from 'react'
import { create } from 'react-test-renderer'
import { MockedProvider } from '@apollo/react-testing'

import { getPokemonQuery, Pokemon } from '../queries/queries'

const mocks = [
    {
        request: {
            query: getPokemonQuery,
            variables: {
                id: 'UG9rZW1vbjowMDE='
            }
        },
        result: {
            data: {
                pokemon: {
                    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
                    number: '001',
                    name: 'Bulbasaur',
                    types: 'GrassPoison',
                    resistant: 'WaterElectricGrassFightingFairy',
                    weaknesses: 'FireIceFlyingPsychic'
                }
            }
        }
    }
]
describe('', () => {
    it('renders without error', () => {

        <MockedProvider mocks={mocks} addTypename={false}>
            <Pokemon id="UG9rZW1vbjowMDE=" />
        </MockedProvider>

    })

    it('should render loading state initially', () => {
        const component = create(<MockedProvider mocks={[]}>
            <Pokemon id="UG9rZW1vbjowMDE=" />
        </MockedProvider>)

        const tree = component.toJSON()
        component.update()
        expect(tree).toMatchSnapshot()

    })
})
