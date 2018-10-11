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

    componentWillMount()
    {
      this.noticiaDetail()
    }


    noticiaDetail=()=>{
        let detalle=this.props.noticia

//         this.setState({noticia: detalle[0]})
//         this.setState({categoria:detalle[0].categoria})
//         this.setState({autor:detalle[0].autor})
            console.log(detalle) 
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
                adasd
            </div>                
        );
    }
}

export default DetailCard;