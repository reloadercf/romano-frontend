import React, { Component } from 'react';
import { CardList } from './CardsList.';


class CardsPage extends Component {

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
        let {carrousel}=this.state
        return (
            <CardList  carrousel={carrousel}/>
        );
    }
}

export default CardsPage;