import React, {Component} from 'react';
import {CardCarrousel} from './CardCarrousel';
import Slider from "react-slick";

export class CarrouselDos extends Component {


    state={
        carrousel:[
            {
                'title':"Este es el titulo 1",
                'imagen': 'https://images.pexels.com/photos/40799/paper-colorful-color-loose-40799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },        
            {
                'title':"Este es el titulo del elemento 2",
                'imagen': 'https://images.pexels.com/photos/159541/wildlife-photography-pet-photography-dog-animal-159541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                'title':"Este es el titulo del elemento 3",         
                'imagen': 'https://images.pexels.com/photos/207903/pexels-photo-207903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                'title':"Este es el titulo del elemento 4",   
                'imagen': 'https://images.pexels.com/photos/257519/pexels-photo-257519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                'title':"Este es el titulo del elemento 5",            
                'imagen': 'https://images.pexels.com/photos/1174166/pexels-photo-1174166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                'title':"Este es el titulo del elemento 6",    
                'imagen': 'https://images.pexels.com/photos/846083/pexels-photo-846083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
        ]
             
    }
    render() {
        let{carrousel}=this.state

        var settings = {
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


        return (
            <Slider {...settings} >
            {carrousel.map((c, key)=>(
               <div>
                   <CardCarrousel   {...c}/>              
               </div>
           ))} 
          
         
         </Slider>
        );
    }
}

