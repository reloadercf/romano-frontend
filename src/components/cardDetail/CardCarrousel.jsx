import React from 'react'

export const CardCarrousel =({id,title,imagen_dos})=>{

    return(
   
        <div className="container-card">
            <img src={imagen_dos} alt="imagen"/>
            <div className="info-container-card" >
                <span>{id}</span>
                <p className="card-title" >{title}</p>   
            </div>
             
        </div>
        
    )
}