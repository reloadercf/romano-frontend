import React, {Component} from 'react';
import {Row, Col} from 'antd'


import CardsPage from '../components/cards/CardsPage';
import Carrousel from '../components/principalcard/Carrousel';
import { CarrouselDos } from '../components/cardDetail/CarrouselDos';

import {connect} from 'react-redux'
import {noticiasListAll} from '../actions'
import {bindActionCreators} from 'redux'


class CategoriesPage extends Component {

    componentWillMount(){
        this.props.noticiasListAll();
    }

    render() {
        console.log(this.props.noticias.noticiasList)
        return (
            <div>
                            
                 <Row type="flex" justify="center" align="center">
                    <Col md={24} sm={24} xs={24} style={{marginBottom: "100px"}}>
                        <CarrouselDos noticias={this.props.noticias.noticiasList} />
                        <Carrousel  noticias={this.props.noticias.noticiasList} />
                    </Col>
                </Row>

                <CardsPage noticias={this.props.noticias.noticiasList} />
            </div>
        );
    }
}

 function mapStateToProps(state){
     return{
         noticias:state.noticias
     }
 }
 function mapDispatchToProps(dispatch){
     return bindActionCreators({noticiasListAll}, dispatch)
    
 }
export default connect(mapStateToProps,mapDispatchToProps)(CategoriesPage);

