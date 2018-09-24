import React, {Component} from 'react';
import {Row, Col} from 'antd'
import './categories.css'
import Carrousel from '../principalcard/Carrousel'
import CardsPage from '../cards/CardsPage';
import {connect} from 'react-redux'
import {noticiasCategoriAll} from '../../actions'
import {bindActionCreators} from 'redux'
import { HeaderCategory } from './HeaderCategory';


class CategoriesPage extends Component {

    componentDidMount(){
        this.props.noticiasCategoriAll(this.props.match.params.modulo_name);
    }

    render() {
        console.log(this.props.noticias.noticiasCategory)
        return (
            <div>
                 <Row type="flex" justify="center" align="center">
                    <Col md={24} sm={24} xs={24} style={{ marginBottom: "20px" }}>
                       <HeaderCategory category_name={this.props.match.params.modulo_name}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="center">
                    <Col md={24} sm={24} xs={24} style={{ marginBottom: "100px" }}>
                        <Carrousel noticias={this.props.noticias.noticiasCategory} />
                    </Col>
                </Row>

                <CardsPage noticias={this.props.noticias.noticiasCategory} />
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
     return bindActionCreators({noticiasCategoriAll}, dispatch)
    
 }
export default connect(mapStateToProps,mapDispatchToProps)(CategoriesPage);

