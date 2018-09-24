import React from 'react'
import {Row, Col} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagram, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom';
import  {FacebookShareButton} from 'react-share'

export const CardComponent = ({slug, titulo, textoprevio, subtitle, imagenportada, cuerpo, categoria,fechainicio,autor}) => {
    return (
        <Row className="recipe-card">

            <Col md={10} sm={24} xs={24}>
            <Link to={`detail/${slug}`}> 
                <div className="div-img hidden">
                    <img className="img" src={imagenportada} alt={titulo}/>
                </div>
            </Link>
           
            </Col>
            <Col md={14} sm={24} xs={24}>
                <article>
                    <div className="div-category">
                        <span>{categoria.nombrecategoria}</span>
                        <span>{fechainicio}</span>
                    </div>

                    <Link to={`/detail/${slug}`}> 
                        <h2>{titulo}</h2>
                    </Link>

                    <h3>{subtitle}</h3>
                    <hr style={{opacity:"0.2"}}/>

                    <p>
                        {textoprevio}                     
                    </p>  
                    <span>Por: Autor {autor.nombre}</span>  


                    <ul>
                        <li>                       
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x"  style={{color:"#15b7b9"}}/>                                  
                        </li>
                        <li >
                            <FacebookShareButton
                                url={"https://www.youtube.com/watch?v=43ZbaI21_IM"}
                                quote={titulo}
                                >
                                <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{color:"#0245a3"}}/> 
                            </FacebookShareButton>           
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