import React from 'react'
import DetailContainer from '../../containers/DetailContainer'

export const Detail =(props)=>{
    return(
        <div> 
            <DetailContainer slug={props.match.params.slug_noticia}/>
        </div>
    )
}
