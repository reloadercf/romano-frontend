import React from 'react';
import {Row, Col,  Card} from 'antd'
import {Icon, Button} from 'antd'

const DetailCardDos =({noticia})=>{
    
    return(
        <div>
        <Row >
            <Col lg={24} md={24}>
                <Row>
                    <Col md={24}>
                    <div className="container_detail_title">
                        <h3 className="detail_title">{noticia.titulo}</h3>
                    </div>
                        
                    </Col>
                
                    <Col md={24}>
                        <span className="detail_categoria">
                            {noticia.categoria.nombrecategoria}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col md={18} sm={18} xs={24}>
                    <div className="detail_autor">
                        <span>{noticia.autor.nombre}</span>
                        <span>{noticia.fechainicio}</span>
                    </div>
                        
                    </Col>
                    {/* <Col md={6} sm={6} xs={24}>
                        <div className="iconos_detail">
                        <ul >
                            <li>
                                <FontAwesomeIcon
                                    icon={faTwitterSquare}
                                    size="2x"
                                    style={{
                                    color: "#15b7b9"
                                }}/>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faFacebookSquare}
                                    size="2x"
                                    style={{
                                    color: "#0245a3"
                                }}/>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    size="2x"
                                    style={{
                                    color: "#f73859"
                                }}/>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faWhatsappSquare}
                                    size="2x"
                                    style={{
                                    color: "#2eb872"
                                }}/>
                            </li>

                        </ul>
                        
                        </div>

                    </Col> */}
                </Row>

            </Col>
        </Row>

        <Row gutter={16} justify={"center"} >
            <Col lg={24} md={24} xs={24} className="detail-img1">
                <img src={noticia.imagenportada} alt=""/>
            </Col>
                <Col md={24}>
                    <span className="detail_subtitle">
                        <strong>{noticia.textograndecuerpo}</strong>
                    </span>
                </Col>
            <Col lg={24} md={24} xs={24}>
               <div className="detail_descripcion_uno" >
                   <p> {noticia.cuerpo}</p>
               </div>                   
            </Col>
        </Row>


        <Row gutter={8} style={{textAlign:"center"}}>
            <Col lg={12} md={12} sm={24} xs={24} >
                <Card
                    cover={<img src={noticia.publicidad1} alt="" style={{width:"100%", height:"300px"}}/>}

                >
                    <div className="detail_descripcion_dos"> 
                         {
                            noticia.boton1==="Visitar"?<Button href={noticia.link1} target="_blank" type="primary" icon="global">Visitar</Button>:null  
                          }
                          {
                            noticia.boton1==="Llamar"?<div>
                            <Icon type="phone" theme="outlined" />
                                <span>Llamar</span>
                                <span> {noticia.numero_llamada1} </span>
                            </div>:null
                          }
                          {
                              noticia.boton2==="Comprar"?<Button href={noticia.link1} target="_blank" type="primary" icon="dolar">Comprar</Button>:null
                          }
                    </div>
                </Card>

            </Col>
            <Col lg={12} md={12}  sm={24} xs={24} >
                <Card
                    cover={<img src={noticia.publicidad2} alt="" style={{width:"100%", height:"300px"}}/>}
                >
                     <div className="detail_descripcion_dos">
                            {
                            noticia.boton2==="Visitar"?<Button href={noticia.link2} target="_blank" type="primary" icon="global">Visitar</Button>:null  
                          }
                          {
                            noticia.boton2==="Llamar"?<div>
                            <Icon type="phone" theme="outlined" />
                                <span>Llamar</span>
                                <span> {noticia.numero_llamada2} </span>
                            </div>:null
                          }
                          {
                              noticia.boton2==="Comprar"?<Button href={noticia.link2} target="_blank" type="primary" icon="dolar">Comprar</Button>:null
                          }
                        </div>
                </Card>

               
            </Col>
        </Row>




    </div>
    )
}
    
export default DetailCardDos;