import React from 'react'

export const CardCarrousel =({id,slug,titulo,imagenportada})=>{

    return(
   
        <div className="container-card">
            <img src={imagenportada} alt="imagen"/>
            <div className="info-container-card" >
                <span>{id}</span>
                <p className="card-title" >{titulo}</p>   
            </div>
             
        </div>
        
    )
}