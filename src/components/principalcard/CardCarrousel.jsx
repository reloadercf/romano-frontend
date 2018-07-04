import React from 'react'
import Background from '../../logo.png'

const style={
    image:{
        //backgroundImage: `url(${imagen})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        width: "100%",
        height: "auto", 
    }
   
}
export const CardCarrousel =({title,subtitle,imagen})=>{

    return(
        <div className="card-image" >
                <div style={{backgroundImage: `url(${imagen})`, backgroundRepeat: "no-repeat", backgroundPosition: "center",  backgroundSize: "contain",  width: "100%",height: "auto", }}>
                    <div className="div-gradient"> 
                        <h1>{title}</h1>                    
                    </div>
                </div>
            
        </div>
        
    )
}