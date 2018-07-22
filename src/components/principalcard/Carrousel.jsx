import React, {Component} from 'react';
import {CardCarrousel} from './CardCarrousel';
import Slider from "react-slick";

class Carrousel extends Component {

    state={
        carrousel:[
            {
                'title':"Este es el titulo 1",
                'subtitle':"este es el subtitulo 1",
                'imagen': 'https://images.pexels.com/photos/40799/paper-colorful-color-loose-40799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },        
            {
                'title':"Este es el titulo del elemento 2",
                'subtitle':"este es el subtitulo del elemento 2",
                'imagen': 'https://images.pexels.com/photos/159541/wildlife-photography-pet-photography-dog-animal-159541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                'title':"Este es el titulo del elemento 3",
                'subtitle':"este es el subtitulo del elemento 3",
                'imagen': 'https://images.pexels.com/photos/207903/pexels-photo-207903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                'title':"Este es el titulo del elemento 4",
                'subtitle':"este es el subtitulo del elemento 4",
                'imagen': 'https://images.pexels.com/photos/257519/pexels-photo-257519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                'title':"Este es el titulo del elemento 5",
                'subtitle':"este es el subtitulo del elemento 5",
                'imagen': 'https://images.pexels.com/photos/1174166/pexels-photo-1174166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                'title':"Este es el titulo del elemento 6",
                'subtitle':"este es el subtitulo del elemento 6",
                'imagen': 'https://images.pexels.com/photos/846083/pexels-photo-846083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
        ]
             
    }

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

        let{carrousel}=this.state

    
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

export default Carrousel;