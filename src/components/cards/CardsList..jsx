import React from 'react'
import {CardComponent} from './CardComponent';
import {Row, Col} from 'antd'



export const CardList = ({noticias}) => {

    return (
        <div>
            <Row type="flex" justify="space-around" >
                {noticias.map((c, key) => (
                    <Col md={24} sm={24} xs={24} key={key}>
                        <CardComponent {...c}/>
                    </Col>
                    
                ))}

            </Row>
        </div>

    )
}