import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {Layout} from 'antd';
import DetailCard from '../components/cardDetail/DetailCard'
import {CarrouselDos} from '../components/cardDetail/CarrouselDos';
import CardsListDos from '../components/cardsdos/CardsListDos';
import {connect} from 'react-redux'
import {noticiaDetail,noticiasListAll } from '../actions'
import {bindActionCreators} from 'redux'
import { CardComponentDos } from '../components/cardsdos/CardComponentDos';


const {Header} = Layout;

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

  
    componentWillMount(){
        this.props.noticiasListAll();
        this.props.noticiaDetail(this.props.match.params.slug_noticia)
    }

    noticiasTemplate=(data)=>(
        data.noticiasData?
         <DetailCard noticias={data.noticiasData}  /> 
        :
        null
    )

    noticiasCarrousel=(data)=>(
        data.noticiasList?
         <CarrouselDos noticias={data.noticiasList} />
        :null
    )

    noticiasCardList=(data)=>(
        data.noticiasData?
            <CardsListDos/>      
        :
        null
    )

    render() {        
        return (
                <Layout style={{background:"#ffff"}}>
                <Header
                    style={{
                    height: 'auto',
                    background: '#ffff'
                }}>
                {this.noticiasCarrousel(this.props.noticias)}   
                </Header>
                    <Row gutter={16}>
                        <Col lg={18} xl={18} md={18} sm={24} xs={24} style={styles.col}>                        
                         {this.noticiasTemplate(this.props.noticias)}        
                        </Col>
                        <Col lg={6} xl={6} md={6} sm={24} xs={24} >                      
                            <CardComponentDos/> 
                            <CardComponentDos/> 
                            <CardComponentDos/> 
                            <CardComponentDos/>                             
                        
                        </Col>
                    </Row>
                    <Row gutter={24} justify={"center"} style={styles.col}>
                        <CardsListDos/>  
                    </Row>
                  
                </Layout>
                
     
        ); 
    }
}
function mapStateToProps(state){
    return{
        noticias:state.noticias
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({noticiaDetail,noticiasListAll}, dispatch)
   
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailContainer);

