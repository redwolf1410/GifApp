import { useFechGifs } from "../../hooks/useFechGifs";
import {renderHook} from '@testing-library/react-hooks';
import '@testing-library/jest-dom'

describe('Test in UseFetchGifs Hook', () => { 
    test('should return initial state', async() => { 

         const {result,waitForNextUpdate} = renderHook( ()=> useFechGifs('One Punch'));
         const {data,loading} = result.current;
         await waitForNextUpdate();

         expect(data).toEqual([])
         expect(loading).toBe(true);

     })
     test('should return a list of images and loading to false', async() => { 
        const {result,waitForNextUpdate} = renderHook( ()=> useFechGifs('One Punch'));
        await waitForNextUpdate();
        const {data,loading} = result.current;

         expect(data.length).toBe(10)
         expect(loading).toBe(false);

      })

 })