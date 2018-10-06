import React, {Component} from 'react';
import {CardCarrousel} from './CardCarrousel';
import {Icon} from 'antd'
import Carousel from 'nuka-carousel';

class Carrousel extends Component {

    state={
        slug:null
    }

    render() {

        const settings = {
            dots: true,
            fade:true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear",
            pauseOnHover: true,
         
           
        };

        let{noticias}=this.props

    
        return (
            
            <Carousel  speed={200} autoplay={true}   
          
              renderCenterLeftControls={({ previousSlide }) => (
                <button onClick={previousSlide} style={{background:"#323232", padding:"5px"}}> <Icon type="left" theme="outlined"  style={{ fontSize: '30px', color: '#ffff' }} /> </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button onClick={nextSlide} style={{background:"#323232"}}><Icon type="right" theme="outlined" style={{ fontSize: '30px', color: '#ffff' }} /></button>
              )}
              
              dragging={true}
              >
 
                 {noticias  &&  noticias.length> 0? 
                     noticias.map((c, key)=>( 
                      <CardCarrousel {...c} key={key}
                      />    
                ))
                :null
                  } 

            </Carousel>
        );
    }
}

export default Carrousel;