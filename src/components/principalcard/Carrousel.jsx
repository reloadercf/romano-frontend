import React, {Component} from 'react';
import {CardCarrousel} from './CardCarrousel';
import Slider from "react-slick";
import {Link} from 'react-router-dom';

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
            <Slider ref={slider => (this.slider = slider)} {...settings}  >
                 {noticias &&  noticias.length> 0? 
                     noticias.map((c, key)=>( 
                      <CardCarrousel {...c} key={key}
                      />    
                ))
                :null
                  } 
                



            </Slider>
        );
    }
}

export default Carrousel;