import React, {Component} from 'react';
import {Col} from 'antd'
import {CardComponentTres} from './CardComponentTres';

class CardsListTres extends Component {
    render() {
        let{noticias, detalle_noticia}=this.props


        let mas_noticias= noticias.filter(p=>{
            return p.categoria.nombrecategoria === detalle_noticia.categoria.nombrecategoria
         })
                  
  
        return (
            <div >
                {mas_noticias &&  mas_noticias.length> 0? 
                    mas_noticias.map((c, key) => (
                    <Col lg={24} md={24} sm={24} xs={24} key={key}>
                        <CardComponentTres {...c}  />
                    </Col>
                )):
                <div>¡¡No hay noticias disponibles!!</div>
                }
            </div>

        );
    }
}

export default CardsListTres;