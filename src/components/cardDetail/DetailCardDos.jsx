import React from 'react';
import {Row, Col, Icon,Button, Card} from 'antd'


const DetailCardDos =({noticia})=>{
    console.log(noticia)
    return(
        <div>
            {noticia.titulo}
        </div>
    )
}
    
export default DetailCardDos;