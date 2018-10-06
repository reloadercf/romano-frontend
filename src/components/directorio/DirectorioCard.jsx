import React from 'react'
import {Row, Col, Icon} from 'antd'
import logo from '../header/logo.png'

export const DirectorioCard=({categori, logotipo, cliente, descripcion, direccion, telefono, telefonodos, correo, ubicacion,sitioweb})=>{
    return(
        <div className="card_directorio">
            <Row type="flex" justify="start" align="center" >
                <Col md={24} sm={24} xs={24} >
                    <span>{categori.categoria}</span>
                </Col>
            </Row>
            <Row gutter={16} type="flex" justify="center" align="center" >
                <Col md={7} sm={8} xs={24} >
                    <div className="card_directorio_logo">
                        <img src={logotipo} alt=""/>
                    </div>
                </Col>
                <Col md={17} sm={16} xs={24} >
                    <div className="card_directorio_info">
                        <h3>{cliente.nombre_patrocinador}</h3>
                        <p>{descripcion}</p>


                        <div className="card_directorio_info_desc">
                            <Icon type="environment" theme="filled" style={{marginRight:"8px", fontSize:"18px"}}/>
                            <span>{direccion}</span>
                        </div>


                        <div className="card_directorio_info_telefonos"> 
                            <Icon type="phone" theme="filled" style={{marginRight:"8px", fontSize:"18px" }}/>
                            <div className="card_directorio_info_numeros">
                             <span>{telefono}</span>
                             <span>{telefonodos}</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row gutter={16} type="flex" justify="center" align="center" >
                <Col md={24} sm={24} xs={24} >
                    <div className="card_directorio_btn">
                        <a ><Icon type="mail" theme="filled"  style={{marginRight:"8px", fontSize:"18px"}}/>{correo}</a>
                        <a href={sitioweb} target="blank"><Icon type="global" theme="outlined" style={{marginRight:"8px", fontSize:"18px"}}/>Sitio web</a>
                        <a href={ubicacion} target="blank"> <Icon type="environment" theme="filled" style={{marginRight:"8px", fontSize:"18px"}}/>Ubicación</a>
                    </div>
                </Col>
                
            </Row>
        </div>
    )
}