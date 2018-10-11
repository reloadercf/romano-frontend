import React, {Component} from 'react';
import {CardCarrousel} from './CardCarrousel';
import {Icon} from 'antd'
import Carousel from 'nuka-carousel';
//import './principalcard.css'

class Carrousel extends Component {

    state={
        slug:null
    }

    render() {

        let{noticias}=this.props
        
        let destacados = noticias.filter(p=>{
            return p.destacado === true
    })
    
        return (
            <div className="div_carrousel" style={{display:"flex", alignItems: "center", justifyContent: "center", marginTop: "5px"}}>
                <Carousel speed={200} autoplay={true}
                  
                    renderCenterLeftControls={({ previousSlide }) => (
                        <button onClick={previousSlide} style={{ background: "#323232", padding: "5px" }}> <Icon type="left" theme="outlined" style={{ fontSize: '30px', color: '#ffff' }} /> </button>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <button onClick={nextSlide} style={{ background: "#323232" }}><Icon type="right" theme="outlined" style={{ fontSize: '30px', color: '#ffff' }} /></button>
                    )}

                    dragging={true}
                    
                >

                    {destacados && destacados.length > 0 ?
                        destacados.map((c, key) => (
                            <CardCarrousel {...c} key={key}  />
                        ))
                        : null
                    }

                </Carousel>

            </div>
          
        );
    }
}

export default Carrousel;