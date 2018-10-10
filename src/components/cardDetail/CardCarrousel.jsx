import React from 'react'
export const CardCarrousel =({id,slug,titulo,imagenportada,key})=>{

    return(
        
        <div className="container-card">
            <a href={`/detail/${slug}`}>
                <img src={imagenportada} alt="imagen"/>
            </a>
            <div className="info-container-card" >
                <span>{titulo}</span>
            </div>
             
        </div>
        
    )
}