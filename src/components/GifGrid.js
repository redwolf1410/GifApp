import React,{useEffect,useState} from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from "../helpers/getGifs";
import { useFechGifs } from "../hooks/useFechGifs";
import PropTypes from "prop-types";
export const GifGrid = ({ category }) => {

    const {data:images, loading } = useFechGifs(category);

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
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}