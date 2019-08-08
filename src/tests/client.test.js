import renderer, { create } from 'react-test-renderer'
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import App from '../App'
import PokemonList from '../components/PokemonList'
import PokemonDetails from '../components/PokemonDetails'



configure({ adapter: new Adapter() })

describe('[<App />]', () => {
    it('[<App />] shows pokemons list', () => {
        const component = renderer.create(<App />)
        const tree = component.toJSON()
        component.update()
        expect(tree).toMatchSnapshot()
    })

    it('[<App />] should have heading 1', () => {
        const wrap = mount(<App />)
        expect(wrap.find('h1')).toHaveLength(1)
    })

    it('[<App />] should render correct text in heading', () => {
        const wrap = shallow(<h1>Pokemon's List:</h1>)
        expect(wrap.text()).toEqual('Pokemon\'s List:')
    })
})

describe('[<PokemonList />]', () => {
    it('[<PokemonList />] renders correctly', () => {
        const wrapper = shallow(<PokemonList />)
        const fetched = true

        const pkmns = [
            { name: "bulbasaur" },
            { name: "ivysaur" },
            { name: "venusaur" }
        ];

        wrapper.setState({
            fetched,
            pkmns
        })

        expect(toJson(wrapper)).toMatchSnapshot()
    });
})
