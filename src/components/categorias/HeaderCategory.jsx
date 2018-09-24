import React from 'react'

export const HeaderCategory=(props)=>{

    return(
        <div className="header_category">
            <div className="overlay">
                <h1>{props.category_name}</h1>
            </div> 
        </div>
    )
}