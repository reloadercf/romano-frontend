import React, {Component} from 'react';
import {Row, Col} from 'antd'
import CardsPage from '../cards/CardsPage';
import Carrousel from '../principalcard/Carrousel';
import { CarrouselDos } from '../cardDetail/CarrouselDos';



class HomePage extends Component {
    render() {
        return (
            <div>
                            
                <Row type="flex" justify="center" align="center">
                    <Col md={24} sm={24} xs={24} style={{marginBottom: "100px"}}>
                        <CarrouselDos/>
                        <Carrousel/>
                    </Col>
                </Row>

                <CardsPage/>             
            </div>
        );
    }
}

export default HomePage;