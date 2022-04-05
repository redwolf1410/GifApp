import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {

    const [categories,setCatergories] = useState(['Rick and Morty'])

    // const handleAdd = () =>{
    //     setCatergories([...categories, value])

    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCatergories={setCatergories}/>  
            <hr />
            <ol>
                {
                    categories.map(category =>
                         <GifGrid 
                            key={category}
                            category={category}/>
                    )
                }

            </ol>
        </>

    )

}

