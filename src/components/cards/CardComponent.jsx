import React from 'react'

import {Row, Col} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagram, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'



export const CardComponent = ({title, subtitle, imagen_uno, descripcion_uno}) => {
    return (
        <Row className="recipe-card">
            <Col md={10} sm={24} xs={24}>
                <div className="div-img hidden">
                    <img className="img" src={imagen_uno} alt="Chai Oatmeal"/>
                </div>
            </Col>
            <Col md={14} sm={24} xs={24}>
                <article>
                    <div className="div-category">
                        <span>MUSICA</span>
                        <span>27 MAYO 2018</span>
                    </div>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <hr/>

                    <p>
                        {descripcion_uno}                     
                    </p>     
                    <ul >
                        <li>
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x"  style={{color:"#15b7b9"}}/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{color:"#0245a3"}}/>    
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} size="2x" style={{color:"#f73859"}}/>    
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faWhatsappSquare} size="2x" style={{color:"#2eb872"}}/>    
                        </li>
                     
                    </ul>

                </article>
            </Col>
        </Row>
    )
}