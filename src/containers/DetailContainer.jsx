import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {Layout} from 'antd';
//import DetailCard from '../components/cardDetail/DetailCard'
import {CarrouselDos} from '../components/cardDetail/CarrouselDos';
import CardsListTres from '../components/cardstres/CardsListTres';
import CardsListDos from '../components/cardsdos/CardsListDos';

//import { CardComponentDos } from '../components/cardsdos/CardComponentDos';
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
            detalle_noticia:this.props.noticias
        }
    
        componentWillMount(){
            this.getNoticias()
        }


    getNoticias=()=>
    {
            //const userToken = JSON.parse(localStorage.getItem('userToken'));
            let url =`${URL}/article/articulofiltro/`;
            var request = new Request(url, {
                method: 'GET',
                headers:new Headers({
                    'Content-Type': 'application/json'
                }) 
            });
            fetch(request)
                .then(r => r.json())
                .then(data => {    
                    this.setState({detalle_noticia: data})
                   
                })
                .catch(e => {
          
                })
          }


    noticiasdetalle=(data)=>(
            data?
            <DetailCardDos noticia={data}/>  
            :null
        )
    noticiasCarrousel=(data)=>(
        data?
         <CarrouselDos noticias={data} />
        :null
    )

    noticiasCardList=(data)=>(
        data?
            <CardsListTres noticias={this.state.detalle_noticia} detalle_noticia={data}/>      
        :
        null
    )

    noticiasCardListDos=(data)=>(
        data?
            <CardsListDos noticias={this.state.detalle_noticia} detalle_noticia={data} />      
        :
        null
    )
    
    render() {             
        let{detalle_noticia}=this.state 

        let detail_noticia = detalle_noticia.find(p=>{
            return p.slug === this.props.match.params.slug_noticia
         })
                  
     

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
                        {this.noticiasdetalle(detail_noticia)} 
                        </Col>
                        <Col lg={7} xl={7} md={7} sm={24} xs={24} >                      
                        {this.noticiasCardList(detail_noticia)}    
                        </Col>
                    </Row>
                    <Row gutter={24} justify={"center"} style={styles.col}>
                         {this.noticiasCardListDos(detail_noticia)}    
                    </Row>
                  
                </Layout>
                
     
        ); 
    }
}

export default DetailContainer;

