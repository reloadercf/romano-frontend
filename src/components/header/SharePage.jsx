import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
export const SharePage=()=>{
    return(
        <div className="btns_compartir" style={{background:"black"}}>
            <FontAwesomeIcon icon={faFacebookSquare} size="3x" className="icon_style" />
            <FontAwesomeIcon icon={faTwitterSquare} size="3x" className="icon_style"/>
            <FontAwesomeIcon icon={faWhatsappSquare} size="3x" className="icon_style"/>
        </div>
    )
}