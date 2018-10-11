import React from 'react'
import {Link} from 'react-router-dom';

export const CardComponentDos =({imagenportada,textoprevio, slug})=>{

    return( 
        <div className="card_component_dos" >
            <div className="div_img_comp_dos">
            <Link to={`/detail/${slug}`}> 
                <img className="img"src={imagenportada}alt=""/>
            </Link>
            </div>   
            <div className="card_dos_text">
                <h3>{textoprevio}</h3>
            </div>
        </div>
    )
}