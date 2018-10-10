import React, {Component} from 'react';
import {Row, Col, Icon,Button, Card} from 'antd'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faTwitterSquare, faFacebookSquare, faInstagram, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'


class DetailCard extends Component {

    state={
        noticias:null
    }

    componentWillMount(){
        this.setState({noticias:this.props.noticias})
        
    }

    renderbtn1=()=>{
        let boton1
        if(this.state.noticias[0].boton1=="Visitar"){
          return  boton1= <Button href={this.state.noticias[0].link1} target="_blank" type="primary" icon="global">Visitar</Button>
        }
        else if(this.state.noticias[0].boton1=="Llamar"){
            return boton1= (<div>
                <Icon type="phone" theme="outlined" />
                    <span>Llamar</span>
                    <span> {this.state.noticias[0].numero_llamada2} </span>
                </div>)
        }
        else if(this.state.noticias[0].boton1=="Comprar"){
            return  boton1= <Button href={this.state.noticias[0].link2} target="_blank" type="primary" icon="dolar">Comprar</Button>
        }
    }


    renderbtn2=()=>{
        let boton1
        if(this.state.noticias[0].boton2=="Visitar"){
          return  boton1= <Button href={this.state.noticias[0].link1} target="_blank" type="primary" icon="global">Visitar</Button>
        }
        else if(this.state.noticias[0].boton2=="Llamar"){
            return boton1= 
            (<div>
                <Icon type="phone" theme="outlined" />
                <span> {this.state.noticias[0].numero_llamada2} </span>
            </div>)
        }
        else if(this.state.noticias[0].boton2=="Comprar"){
            return  boton1= <Button href={this.state.noticias[0].link2} target="_blank" type="primary" icon="dolar">Comprar</Button>
        }
    }

    render() {  
        let {noticias} = this.state
      

        console.log(noticias)
        return (
            <div>
                <Row >
                    <Col lg={24} md={24}>
                        <Row>
                            <Col md={24}>
                            <div className="container_detail_title">
                                <h1 className="detail_title">{noticias[0].titulo}</h1>
                            </div>
                                
                            </Col>
                            <Col md={24}>
                                <span className="detail_subtitle">
                                    {noticias[0].textograndecuerpo}
                                </span>
                            </Col>
                            <Col md={24}>
                                <span className="detail_categoria">
                                    {noticias[0].categoria.nombrecategoria}
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={18} sm={18} xs={24}>
                            <div className="detail_autor">
                                <span>{noticias[0].autor.nombre}</span>
                                <span>{noticias[0].fechainicio}</span>
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
                        <img src={noticias[0].imagenportada} alt=""/>
                    </Col>
                    <Col lg={24} md={24} xs={24}>
                       <div className="detail_descripcion_uno" >
                           <p> {noticias[0].cuerpo}</p>
                       </div>                   
                    </Col>
                </Row>


                <Row gutter={8} style={{textAlign:"center"}}>
                    <Col lg={12} md={12} sm={24} xs={24} >
                        <Card
                            cover={<img src={noticias[0].publicidad1} alt="" style={{width:"100%", height:"300px"}}/>}

                        >
                            <div className="detail_descripcion_dos"> 
                                 {this.renderbtn1()}
                            </div>
                        </Card>

                    </Col>
                    <Col lg={12} md={12}  sm={24} xs={24} >
                        <Card
                            cover={<img src={noticias[0].publicidad2} alt="" style={{width:"100%", height:"300px"}}/>}
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