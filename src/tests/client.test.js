import renderer, { create } from 'react-test-renderer'
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../App'



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
        console.log(wrap)
        expect(wrap.text()).toEqual('Pokemon\'s List:')
    })
})
