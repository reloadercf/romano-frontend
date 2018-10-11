import React from 'react'
import {Link} from 'react-router-dom';

export const CardComponentTres =({imagenportada,titulo, slug})=>{

    return( 
        <div className="card_component_tres" >
            <div className="div_img_comp_tres">
            <Link to={`/detail/${slug}`} style={{textAlign:"center"}}> 
                <img className="img"src={imagenportada}alt=""/>
            </Link>
            </div>   
            <div className="card_tres_text">
                <Link to={`/detail/${slug}`} style={{textAlign:"center"}}> 
                <h3>{titulo}</h3>
                </Link>
            </div>
        </div>
    )
}