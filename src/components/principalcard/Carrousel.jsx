import React, {Component} from 'react';
import {CardCarrousel} from './CardCarrousel';
import Slider from "react-slick";

class Carrousel extends Component {

    state={
        carrousel:[
            {
                'title':"Este es el titulo",
                'subtitle':"este es el subtitulo",
                'imagen': 'https://images.pexels.com/photos/40799/paper-colorful-color-loose-40799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },        
            {
                'title':"Este es el titulo del elemento 2",
                'subtitle':"este es el subtitulo del elemento 2",
                'imagen': 'https://images.pexels.com/photos/40757/pen-crayon-color-sharp-40757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                'title':"Este es el titulo del elemento 3",
                'subtitle':"este es el subtitulo del elemento 3",
                'imagen': 'https://images.pexels.com/photos/990824/pexels-photo-990824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
        ]
             
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
            pauseOnHover: true

            
            
        };

        let{carrousel}=this.state

    
        return (
            <Slider {...settings} className="carrousel">
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