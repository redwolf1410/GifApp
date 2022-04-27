import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs', () => { 
    test('should ahve 10 elements', async() => { 
        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBe(10);
     })
 })