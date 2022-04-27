import {GifGridItem} from '../../components/GifGridItem';
import {shallow} from 'enzyme'
import React  from 'react';

const title = 'Un titulo'
const url = 'https://localhost/loquesea.jpg'
const wrapper = shallow(<GifGridItem title={title} url={url} />)
describe('Pruebas en GifGridItem />', () => { 

    test('Debe mostrar el componente correctamente', () => { 


        expect(wrapper).toMatchSnapshot();
     })
     test('should have a paragraph with the title', () => { 
         const p = wrapper.find('p');
         expect( p.text().trim()).toBe(title);
      })
      test('should have animate__fadeIn', () => { 
          const div = wrapper.find('div')
          const className = div.prop('className')
          expect(className.includes('animate__fadeIn')).toBe(true);
       })
 })