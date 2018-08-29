import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {Layout} from 'antd';
import DetailCard from './DetailCard';
import {CarrouselDos} from './CarrouselDos';
import CardsListDos from '../cardsdos/CardsListDos';
const {Header, Footer} = Layout;

const styles={
    row:{
    },
    col:{
        padding: "2em"

    },
    colsider:{
        background: "#08d9d6"
    }
}
export class Detail extends Component {

    state={
        publicacion:{}
    }

    componentWillMount(){
        this.get_publicacion()
    }

    get_publicacion=()=>{
        //let{publicacion}=this.state
        let slug_publicacion=this.props.match.params.slug_noticia
        let publicaciones=this.props.noticias
        let publicacion_detail=publicaciones.find(p => {
            return p.slug === slug_publicacion;
        })

        this.setState({publicacion:publicacion_detail})

        console.log(publicacion_detail)       
    }



    render() {
        let{noticias}=this.props
        let{publicacion}=this.state
        
        return (
                <Layout style={{background:"#ffff"}}>
                <Header
                    style={{
                    height: 'auto',
                    background: '#ffff'
                }}>
                <CarrouselDos noticias={noticias} />
                </Header>
                    <Row gutter={16}>
                        <Col lg={18} xl={18} md={18} sm={24} xs={24} style={styles.col}>                        
                            <DetailCard publicacion={publicacion}/>                      
                        </Col>
                        <Col lg={6} xl={6} md={6} sm={24} xs={24} >
                            En esta parte ira la publicidas
                        </Col>
                    </Row>
                    <Row gutter={24} justify={"center"} style={styles.col}>
                        <CardsListDos/>  
                    </Row>
                  
                </Layout>
                
     
        );
    }
}
