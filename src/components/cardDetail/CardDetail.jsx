import React from 'react'
import {Row, Col} from 'antd'
import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;

export const CardDetail = () => {
    return (
        <Layout>
            <Header className="titulo-detail">
                <Row gutter={16}>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
                </Row>
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>

    )
}