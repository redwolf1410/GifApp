
import React ,{ useState,useEffect } from 'react'
import { getGifs } from "../components/helpers/getGifs";
export const useFechGIfs = (category) => {
    const [images, setImages] = useState({
        data:[],
        loading: true
    });
    useEffect(() => {

        getGifs(category).then(imgs => 
            setTimeout(()=>{
                setImages({
                    data:imgs,
                    loading:false})
            },1000)
            );

    }, [category  ])

    
    return images
}
