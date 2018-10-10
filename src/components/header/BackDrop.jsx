import React from 'react'
import './backdrop.css'
export const BackDrop =(props)=>{
    return(
        <div className="backdrop" onClick={props.click}/>

        
    )
}