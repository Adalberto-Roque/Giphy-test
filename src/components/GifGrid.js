import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading} = useFetchGif( category );

    return (
        <>
            <h4> { category }</h4>
            
            { loading && <p>Cargando...</p>}
            
            <div className="card-grid">
                {
                    images.map( img => 
                        <GifGridItem 
                            key={ img.id }
                            { ...img } />
                    )
                }
            </div>
        </>
    )
}
