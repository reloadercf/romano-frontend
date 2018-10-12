import React from 'react'
import {Row, Col, } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
export const DetailAutor=({autor})=>{
    return(
        <div className="card_autor" >
            <Row type="flex" justify="start" align="center" >
                <Col md={8} sm={8} xs={24} >
                     <div className="card_autor_image">
                           <img src={autor.foto}  alt={autor.nombre}></img>
                     </div>
                </Col>
                <Col md={16} sm={16} xs={24} >
                    <div className="card_autor_info">
                          <h4>AUTOR: {autor.nombre}</h4>
                          <span>{autor.biografia}</span>
                          <p>{autor.intereses}</p>
                        <div className="card_autor_info_social">
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="icon_style" />
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="icon_style" />
                            <FontAwesomeIcon icon={faWhatsappSquare} size="2x" className="icon_style" />
                        </div>
                    </div>
                  
                </Col>
            </Row>
        </div>   
    )
}