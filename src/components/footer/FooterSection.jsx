import React from 'react'
import {Row, Col} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faAppStoreIos} from '@fortawesome/free-brands-svg-icons'
export const FooterSection=()=>{
    return(
        <div className="footer">  
                 <Row type="flex" justify="space-around" >
                    <Col lg={6} md={6} xs={24} style={{marginBottom: "1em"}}>
                       <div className="contacto">
                           <h2>Contacto</h2>
                           <span>
                               contacto@planb.com.mx
                           </span>
                       </div>
                    </Col>
                    <Col lg={6} md={6} xs={24} style={{marginBottom: "1em"}}>
                       <div className="follow">
                           <h2>Disponible para:</h2>
                           <div style={{marginTop:"20px"}}>
                                <span style={{display:"flex", justifyContent:"start", alignItems: "center",}} >Android <FontAwesomeIcon icon={faGooglePlay} size="3x"  style={{color:"#ffff", marginLeft:"1em"}}/>     </span>
                                
                           </div>
                           <div  style={{marginTop:"20px"}}> 
                               <span style={{display:"flex", justifyContent:"start", alignItems: "center"}}>IOS  <FontAwesomeIcon icon={faAppStoreIos} size="3x"  style={{color:"#ffff", marginLeft:"1em"}}/>     </span>
                               
                           </div>
                       </div>
                    </Col>
                    <Col lg={6} md={6} xs={24} style={{marginBottom: "1em"}}>
                        <div className="developer"> 
                            <p>Designed by PLANB</p>
                            <h2>MX Asturias</h2>   
                        
                        </div>    
                    </Col>
                    <Col lg={6} md={6} xs={24}>
                        <div className="aviso" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <p>
                                Con nuestro Pensamientos Cambiamos el Mundo
                            </p>
                             <p>
                                ©PlanB 2018. All rights reserved.
                             </p>
                        </div> 
                    </Col>   
                </Row>
        </div>
    )
}