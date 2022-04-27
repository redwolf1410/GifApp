import {AddCategory} from '../../components/AddCategory';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import React  from 'react';



describe('tests for AddCategory', () => { 
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories} />)
    
    beforeEach( ()=> {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories} />)

    }
    )
    test('should be the same as the snapshot', () => { 

        expect(wrapper).toMatchSnapshot();

     })

     test('should change textbox', () => { 
         const input = wrapper.find('input');
         const value = 'Hola mundo';

         input.simulate('change',{ target: {value}});

         expect(wrapper.find('p').text().trim()).toBe(value)
      })
      test('should not post info with submit', () => { 
          wrapper.find('form').simulate('submit',{preventDefault(){}}) 
          expect(setCategories).not.toHaveBeenCalled(); 

       })
       test('should call setcategories abd clean textbox', () => { 
           const value = 'Hola mundo'
           wrapper.find('input').simulate('change',{target:{value} })

           wrapper.find('form').simulate('submit',{preventDefault(){} })
           expect(setCategories).toHaveBeenCalled()
           expect(wrapper.find('input').prop('value')).toBe('');

        })

 })