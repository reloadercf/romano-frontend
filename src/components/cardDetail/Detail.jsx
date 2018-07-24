import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {Layout} from 'antd';
import DetailCard from './DetailCard';
import {CarrouselDos} from './CarrouselDos';
const {Header, Footer} = Layout;

const styles={
    row:{


    },
    col:{
        padding: "2em"

    },
    colsider:{
        background: "#08d9d6"
    }
}
export class Detail extends Component {
    render() {
        return (
    
                <Layout style={{background:"#ffff"}}>
                <Header
                    style={{
                    height: 'auto',
                    background: '#ffff'
                }}>
                <CarrouselDos/>
                </Header>
                    <Row gutter={16}>
                        <Col lg={18} xl={18} md={18} sm={24} xs={24} style={styles.col}>                        
                            <DetailCard/>                      
                        </Col>
                        <Col lg={6} xl={6} md={6} sm={24} xs={24} >
                            En esta parte ira la publicidas
                        </Col>
                    </Row>
                    <Footer style={{background:"#ffff"}}>Footer</Footer>
                </Layout>
                
     
        );
    }
}
