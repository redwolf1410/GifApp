import {GifGrid} from '../../components/GifGrid';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import React  from 'react';
import { useFechGifs } from '../../hooks/useFechGifs';
jest.mock('../../hooks/useFechGifs')

const value = 'One Punch'
describe('GifGrid tests', () => { 
    
    test('should be the same as the snapshot', () => { 

        useFechGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category = {value}/>)
        expect(wrapper).toMatchSnapshot();
        
     })
    test('should show items when images are loaded with useFetch', () => { 
        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/tuputamaadre.jpg',
            title:'Cualquier cosa'
        }]
        useFechGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        const wrapper = shallow(<GifGrid category={value} />)
        expect(wrapper.find('p').exists()).toBe(false)        
     })

 })