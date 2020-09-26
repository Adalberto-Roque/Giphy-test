import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Simpsons'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr/>
            <div  className="animate__animated animate__fadeIn animate__delay-2s">
                { 
                    categories.map( c => 
                        <GifGrid 
                            key = { c }
                            category = { c }/>
                    )
                }
            </div>
        </>
    )
}
