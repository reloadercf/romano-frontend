import React, {Component} from 'react';
import {Row, Col} from 'antd'
import CardsPage from '../cards/CardsPage';
import Carrousel from '../principalcard/Carrousel';



let style = {
    gridcolor: {
        backgroundColor: '#f08a5d'
    },
    gridcolordos: {
        backgroundColor: '#a8d8ea'
    },
    gridcolortres: {
        backgroundColor: '#62d2a2'
    },
    gridcolorcuatro: {
        backgroundColor: '#f08a5d'
    }
}
class HomePage extends Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="center">
                    <Col md={20} sm={20} xs={24} style={{marginBottom: "100px"}}>
                        <Carrousel/>
                    </Col>
                </Row>

                <CardsPage/>             
            </div>
        );
    }
}

export default HomePage;