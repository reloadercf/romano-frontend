import React from 'react'
import { Icon} from 'antd';
import {Row, Col} from 'antd';


export const CardComponent = ({title, subtitle, imagen, description}) => {
    return (
        <Row className="recipe-card">
            <Col md={10} sm={24} xs={24}>
                <div className="div-img">
                    <img src={imagen} alt="Chai Oatmeal"/>
                </div>
            </Col>
            <Col md={14} sm={24} xs={24}>
                <article>
                    <div className="div-category">
                        <span>MUSICA</span>
                        <span>27 MAYO 2018</span>
                    </div>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <hr/>

                    <p>
                        {description}
                    </p>

                    {/* <p className="ingredients">
          <span>Ingredients:&nbsp;</span>Milk, salt, coriander, cardamom, cinnamon,
          turmeric, honey, vanilla extract, regular oats, oat bran.
        </p> */}

                    <ul >
                        <li>
                            <Icon
                                type="facebook"
                                style={{
                                    fontSize: 20,
                                    color: '#1A2C5B'
                                }}
                            
                               />
                        </li>
                        <li>
                            <Icon
                                type="facebook"
                                style={{
                                fontSize: 20,
                                color: '#1A2C5B'
                            }}/>
                        </li>
                        <li>
                            <Icon
                                type="facebook"
                                style={{
                                fontSize: 20,
                                color: '#1A2C5B'
                            }}/>
                        </li>
                        <li>
                            <Icon
                                type="facebook"
                                style={{
                                fontSize: 20,
                                color: '#1A2C5B'
                            }}/>
                        </li>
                    </ul>

                </article>
            </Col>
        </Row>
    )
}