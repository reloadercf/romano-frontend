import React, {Component} from 'react';
import {CardCarrousel} from './CardCarrousel';
import Slider from "react-slick";

class Carrousel extends Component {


    render() {

        const settings = {
            dots: true,
            fade:true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear",
            pauseOnHover: true         
        };

        let{noticias}=this.props

    
        return (
            <Slider {...settings}  >
                 {noticias.map((c, key)=>(
                    <div key={key} >
                        <CardCarrousel  {...c}/>              
                    </div>
                ))} 
                   
            </Slider>
        );
    }
}

export default Carrousel;