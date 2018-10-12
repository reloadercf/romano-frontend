import React, {Component} from 'react';
import {Col} from 'antd'
import {CardComponentDos} from './CardComponentDos';

class CardsListDos extends Component {
    render() {
        let{noticias, detalle_noticia}=this.props


        let mas_noticias= noticias.filter(p=>{
            return p.categoria.nombrecategoria === detalle_noticia.categoria.nombrecategoria
         })
                  
  
        return (
            <div>
                 <div className="div_title_detail">
                     <h3> Mas Sobre {detalle_noticia.categoria.nombrecategoria}</h3>
                 </div>
                {mas_noticias &&  mas_noticias.length> 0? 
                    mas_noticias.map((c, key) => (
                    <Col lg={8} md={8} sm={16} xs={24} key={key} style={{marginRight:"10px"}}>
                        <CardComponentDos {...c}   />
                    </Col>
                )):
                <div>¡¡No hay noticias disponibles!!</div>
                }
              
            </div>

        );
    }
}

export default CardsListDos;