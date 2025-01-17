import React from 'react'
import {CardComponent} from './CardComponent';
import {Row, Col} from 'antd'


export const CardList = ({noticias}) => {

    return (
        <div>
            <Row type="flex" justify="space-around" >               
                {noticias &&  noticias.length> 0? 
                    noticias.map((c, key) => (
                    <Col md={24} sm={24} xs={24} key={key}>
                        <CardComponent {...c}/>
                      <hr style={{opacity:"0.5"}}/>
                    </Col>
                )):
                <div>¡¡No hay noticias disponibles!!</div>
                }
            </Row>
        </div>

    )
}