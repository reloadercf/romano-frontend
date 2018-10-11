import React, {Component} from 'react';
import {Row, Col, Button, Icon, Card} from 'antd'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faTwitterSquare, faFacebookSquare, faInstagram, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'

const URL='https://www.mxplanb.xyz';

class DetailCard extends Component {

    
    state={
        noticia:{}, 
        categoria:{},
        autor:{}
    }

    componentWillMount(){
        this.noticiaDetail()
    }
    noticiaDetail=()=>{
        let detalle=this.props.noticia
        this.setState({noticia: detalle})
        this.setState({categoria:detalle.categoria})
        this.setState({autor:detalle.autor})
        }


    renderbtn1=()=>
    {
        let boton1
        let{noticia}=this.state
        if(noticia.boton1==="Visitar"){
          return  boton1= <Button href={noticia.link1} target="_blank" type="primary" icon="global">Visitar</Button>
        }
        else if(noticia.boton1==="Llamar"){
            return boton1= (<div>
                <Icon type="phone" theme="outlined" />
                    <span>Llamar</span>
                    <span> {noticia.numero_llamada2} </span>
                </div>)
        }
        else if(noticia.boton1==="Comprar"){
            return  boton1= <Button href={noticia.link2} target="_blank" type="primary" icon="dolar">Comprar</Button>
        }
    }


    renderbtn2=()=>{
        let boton1
        if(this.state.noticia.boton2==="Visitar"){
          return  boton1= <Button href={this.state.noticia.link1} target="_blank" type="primary" icon="global">Visitar</Button>
        }
        else if(this.state.noticia.boton2==="Llamar"){
            return boton1= 
            (<div>
                <Icon type="phone" theme="outlined" />
                <span> {this.state.noticia.numero_llamada2} </span>
            </div>)
        }
        else if(this.state.noticia.boton2==="Comprar"){
            return  boton1= <Button href={this.state.noticia.link2} target="_blank" type="primary" icon="dolar">Comprar</Button>
        }
    }

    render() {  
        let {noticia, categoria, autor} = this.state
        return (
            <div>
            <Row >
                <Col lg={24} md={24}>
                    <Row>
                        <Col md={24}>
                        <div className="container_detail_title">
                            <h1 className="detail_title">{noticia.titulo}</h1>
                        </div>
                            
                        </Col>
                        <Col md={24}>
                            <span className="detail_subtitle">
                                {noticia.textograndecuerpo}
                            </span>
                        </Col>
                        <Col md={24}>
                            <span className="detail_categoria">
                                {categoria.nombrecategoria}
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={18} sm={18} xs={24}>
                        <div className="detail_autor">
                            <span>{autor.nombre}</span>
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
                             {this.renderbtn1()}
                        </div>
                    </Card>

                </Col>
                <Col lg={12} md={12}  sm={24} xs={24} >
                    <Card
                        cover={<img src={noticia.publicidad2} alt="" style={{width:"100%", height:"300px"}}/>}
                    >
                         <div className="detail_descripcion_dos">
                                 {this.renderbtn2()}
                            </div>
                    </Card>

                   
                </Col>
            </Row>




        </div>

                          
        );
    }
}

export default DetailCard;