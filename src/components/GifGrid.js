import React,{useEffect,useState} from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from "./helpers/getGifs";
import { useFechGIfs } from "../hooks/useFechGIfs";
export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs));
    // }, [category    ])
    
    const {data:images, loading } = useFechGIfs(category);
    console.log(images)


    return (
        <>
        <h3>{category}</h3>

        { loading ? 'Loading...' : 
         <div className='card-grid'>
            
            {
                images.map( img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}/>     
                        )
                )
            }
        </div> }
        </>
    )
}
