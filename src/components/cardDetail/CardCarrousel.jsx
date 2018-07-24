import React from 'react'

export const CardCarrousel =({title,imagen})=>{

    return(
   
        <div className="container-card">
            <img src={imagen} alt="imagen" />
            <h1 className="card-title" >{title}asd</h1>      
        </div>
        
    )
}