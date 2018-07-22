import React, { Component } from 'react';
import { CardList } from './CardsList.';


class CardsPage extends Component {

    state={
        carrousel:[
            {
                'title':"El labrador esta Bonito",
                'subtitle':"Los perros son los mejores amigos del hombre",
                'description': "Sabias que los perros son capaces de olfatar.....",
                'imagen': 'https://images.pexels.com/photos/159541/wildlife-photography-pet-photography-dog-animal-159541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },        
            {
                'title':"Este es el titulo del elemento 2",
                'subtitle':"este es el subtitulo del elemento 2",
                'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus distinctio quidem suscipit ea minima error cumque reprehenderit",
                'imagen': 'https://images.pexels.com/photos/207903/pexels-photo-207903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                'title':"Este es el titulo del elemento 3",
                'subtitle':"este es el subtitulo del elemento 3",
                'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus distinctio quidem suscipit ea minima error cumque reprehenderit",
                'imagen': 'https://images.pexels.com/photos/990824/pexels-photo-990824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                'title':"Este es el titulo del elemento 4",
                'subtitle':"este es el subtitulo del elemento 4",
                'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus distinctio quidem suscipit ea minima error cumque reprehenderit",
                'imagen': 'https://images.pexels.com/photos/207903/pexels-photo-207903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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
        let {carrousel}=this.state
        return (
            <CardList  carrousel={carrousel}/>
            
        );
    }
}

export default CardsPage;