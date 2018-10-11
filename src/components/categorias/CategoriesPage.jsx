import React, {Component} from 'react';
import {Row, Col} from 'antd'
import './categories.css'
import Carrousel from '../principalcard/Carrousel'
import CardsPage from '../cards/CardsPage';

import { HeaderCategory } from './HeaderCategory';
import { CarrouselDos } from '../cardDetail/CarrouselDos';

const URL='https://www.mxplanb.xyz';

class CategoriesPage extends Component {


    state={
        noticias:this.props.noticias,
        category:'Fitness'
    }
    componentWillMount(){
        this.getNoticiasCategori()
    }
    
    getNoticiasCategori=()=>{
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
                this.setState({noticias: data})
            })
            .catch(e => {
      
            })
   }


        render() {
            let {noticias}=this.state
            let filter_category = noticias.filter(p=>{
                    return p.categoria.nombrecategoria === this.props.match.params.modulo_name
            })
            


        return (
            <div>
                 <Row type="flex" justify="center" align="center">
                    <Col md={24} sm={24} xs={24} style={{ marginBottom: "20px" }}>
                       <HeaderCategory category_name={this.props.match.params.modulo_name}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="center">
                    <Col md={24} sm={24} xs={24} style={{ marginBottom: "100px" }}>
                        <CarrouselDos noticias={noticias} />
                        <Carrousel noticias={noticias} />
                    </Col>
                </Row>

                <CardsPage noticias={filter_category}  />
            </div>
           
        );
    }
}


export default CategoriesPage;

