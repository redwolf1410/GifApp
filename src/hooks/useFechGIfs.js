
import React ,{ useState,useEffect } from 'react'
import { getGifs } from "../helpers/getGifs";
export const useFechGifs = (category) => {
    const [state, setState] = useState({
        
        data: [],
        loading: true
    });
    useEffect(() => {

        getGifs(category).then(imgs => 
            setTimeout(()=>{
                setState({
                    data: imgs,
                    loading: false})
            },100)
            );

    }, [category  ])

    
    return state
}
