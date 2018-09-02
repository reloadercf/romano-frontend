import React, {Component} from 'react';
import {CardCarrousel} from './CardCarrousel';
import Slider from "react-slick";

export class CarrouselDos extends Component {


   
    render() {
       
        var settingsdos = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
          let{noticias}=this.props

        return (
            <Slider {...settingsdos} >
            {noticias &&  noticias.length> 0? 
              noticias.map((c, key)=>(
               <div key={key} >
                   <CardCarrousel  {...c}/>              
               </div>
           )):null} 
            </Slider>
        );
    }
}

