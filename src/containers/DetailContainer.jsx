import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {Layout} from 'antd';
import DetailCard from '../components/cardDetail/DetailCard'
import {CarrouselDos} from '../components/cardDetail/CarrouselDos';
import CardsListDos from '../components/cardsdos/CardsListDos';

import { CardComponentDos } from '../components/cardsdos/CardComponentDos';
import DetailCardDos from '../components/cardDetail/DetailCardDos';


const {Header} = Layout;
const URL='https://www.mxplanb.xyz';

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
class DetailContainer extends Component 
    {

        state={
            detalle_noticia:[]
        }
    
    componentWillMount () {
        this.getNoticias()
    }


    getNoticias = () => {
        //const userToken = JSON.parse(localStorage.getItem('userToken'));
        let url =`${URL}/article/articulofiltro/?slug=${this.props.match.params.slug_noticia}`;
        var request = new Request(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r => r.json())
            .then(data => {
                this.setState({ detalle_noticia: data })
           
            })
            .catch(e => {

            })
    }
    
    
    noticiasCarrousel=(data)=>(
        data?
         <CarrouselDos noticias={data} />
        :null
    )

    noticiasCardList=(data)=>(
        data?
            <CardsListDos/>      
        :
        null
    )


    render() {             
        let{detalle_noticia}=this.state 
        return (
                <Layout style={{background:"#ffff"}}>
                <Header 
                    style={{
                    height: 'auto',
                    background: '#ffff',
                    marginBottom: "100px",
                }}>
              
                </Header>
                    <Row gutter={16}>
                    {this.noticiasCarrousel(detalle_noticia)}   
                        <Col lg={17} xl={17} md={17} sm={24} xs={24} style={styles.col}>                        
                        <DetailCardDos noticia={detalle_noticia} />  
                        </Col>
                        <Col lg={7} xl={7} md={7} sm={24} xs={24} >                      
                            <CardComponentDos/>                   
                            <CardComponentDos/> 
                            <CardComponentDos/> 
                            <CardComponentDos/> 
                            <CardComponentDos/> 
                        
                        </Col>
                    </Row>
                    <Row gutter={24} justify={"center"} style={styles.col}>
                    {this.noticiasCardList(detalle_noticia)}    
                    </Row>
                  
                </Layout>
                
     
        ); 
    }
}

export default DetailContainer;

