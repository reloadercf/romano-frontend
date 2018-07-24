import React from 'react'
import {CardComponent} from './CardComponent';
import {Row, Col} from 'antd'



export const CardList = ({carrousel}) => {

    return (
        <div>
            <Row type="flex" justify="space-around" >
                {carrousel.map((c, key) => (
                    <Col md={24} sm={24} xs={24}>
                        <CardComponent {...c}/>
                    </Col>
                    
                ))}

            </Row>
        </div>

    )
}