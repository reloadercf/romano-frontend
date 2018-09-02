import React, {Component} from 'react';
import {Row, Col} from 'antd'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitterSquare, faFacebookSquare, faInstagram, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'

class DetailCard extends Component {
    render() {  
        let {noticias} = this.props
        console.log(this.props)
        return (
            <div>
                <Row >
                    <Col lg={24} md={24}>
                        <Row>
                            <Col md={24}>
                            <div className="container_detail_title">
                                <h1 className="detail_title">{noticias[0].titulo}</h1>
                            </div>
                                
                            </Col>
                            <Col md={24}>
                                <span className="detail_subtitle">
                                    {noticias[0].textograndecuerpo}
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={18} sm={18} xs={24}>
                            <div className="detail_autor">
                                <span>{noticias[0].autor.nombre}</span>
                                <span>{noticias[0].fechainicio}</span>
                            </div>
                                
                            </Col>
                            <Col md={6} sm={6} xs={24}>
                                <div className="iconos_detail">
                                <ul >
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faTwitterSquare}
                                            size="2x"
                                            style={{
                                            color: "#15b7b9"
                                        }}/>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faFacebookSquare}
                                            size="2x"
                                            style={{
                                            color: "#0245a3"
                                        }}/>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faInstagram}
                                            size="2x"
                                            style={{
                                            color: "#f73859"
                                        }}/>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faWhatsappSquare}
                                            size="2x"
                                            style={{
                                            color: "#2eb872"
                                        }}/>
                                    </li>

                                </ul>
                                
                                </div>

                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col lg={24} md={24} className="detail-img1">
                        <img src={noticias[0].publicidad1} alt=""/>
                    </Col>
                    <Col>
                       <div className="detail_descripcion_uno" >
                           <p style={{marginTop: "1em"}}> {noticias[0].cuerpo}</p>
                       </div>
                                          
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col lg={12} md={12} sm={12} xs={24} className="detail-img2">
                        <img src={noticias[0].publicidad2} alt=""/>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={24} className="detail_descripcion_dos">
                        <p>
                            {noticias[0].cuerpo}
                        </p>
                 
                    </Col>             
                </Row>

            </div>

        );
    }
}

export default DetailCard;