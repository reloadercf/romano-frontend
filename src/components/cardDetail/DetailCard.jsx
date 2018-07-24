import React, {Component} from 'react';
import {Row, Col} from 'antd'

class DetailCard extends Component {
    render() {
        return (
            <div>
                <Row >
                    <Col lg={24} md={24}>
                        <Row>
                            <Col md={24}>
                                <h1>Este es el titulo de la noticia</h1>
                            </Col>
                            <Col  md={24}>
                                <span> Este es el mensaje de persuacion</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={18} sm={18} xs={24}>
                                <span>Datos del autor</span>
                                <span>Fecha de la noticia</span>
                            </Col>
                            <Col md={6} sm={6} xs={24}>
                             Botones para compartir la noticia
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col lg={24} md={24} className="detail-img1">
                        <img
                            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aguacate-1528873678.jpg?crop=1.00xw:0.753xh;0,0.0758xh&resize=980:*"
                            alt=""/>
                    </Col>
                    <Col></Col>
                </Row>

            </div>

        );
    }
}

export default DetailCard;