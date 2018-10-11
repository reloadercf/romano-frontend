import React, {Component} from 'react';
import {CardCarrousel} from './CardCarrousel';
import Carousel from 'nuka-carousel';
import {Icon} from 'antd'

export class CarrouselDos extends Component {

        
   
    render() {
       
       
          let{noticias}=this.props
          let destacados = noticias.filter(p=>{
            return p.destacado === true
             })
        return (
            <div className="mostrar_carrousel">
            <Carousel speed={200} autoplay={true} slidesToShow={5} slidesToScroll={1}  dragging={true}   
            withoutControls={true}
            
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide} style={{background:"#323232", padding:"5px"}}> <Icon type="left" theme="outlined"  style={{ fontSize: '10px', color: '#ffff' }} /> </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button onClick={nextSlide} style={{background:"#323232"}}><Icon type="right" theme="outlined" style={{ fontSize: '10px', color: '#ffff' }} /></button>
            )}

            >
            {destacados &&  destacados.length> 0? 
              destacados.map((c, key)=>(
               <div key={key} >
                   <CardCarrousel  {...c} />              
               </div>
           )):null} 


            </Carousel>
            </div>
         
        );
    }
}

