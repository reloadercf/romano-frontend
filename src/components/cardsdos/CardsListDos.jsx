import React, {Component} from 'react';
import {Col} from 'antd'
import {CardComponentDos} from './CardComponentDos';

class CardsListDos extends Component {
    render() {
        return (
            <div >
                 <div className="div_title_detail">
                     <h1>Mas sobre</h1>
                 </div>
                <Col lg={8} md={8} sm={16} xs={24}>
                    <CardComponentDos/>
                </Col>
                <Col lg={8} md={8} sm={16} xs={24}>
                    <CardComponentDos/>
                </Col>
                <Col lg={8} md={8} sm={16} xs={24}>
                    <CardComponentDos/>
                </Col>
                <Col lg={8} md={8} sm={16} xs={24}>
                    <CardComponentDos/>
                </Col>
                <Col lg={8} md={8} sm={16} xs={24}>
                    <CardComponentDos/>
                </Col>
                <Col lg={8} md={8} sm={16} xs={24}>
                    <CardComponentDos/>
                </Col>
            </div>

        );
    }
}

export default CardsListDos;