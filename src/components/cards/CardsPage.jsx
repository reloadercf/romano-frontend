import React, { Component } from 'react';
import { CardList } from './CardsList.';


class CardsPage extends Component {

    componentDidMount(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v3.1&appId=952580004916563&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
    }

    render() {
        let {noticias}=this.props
        return (
            <CardList  noticias={noticias}/>
            
        );
    }
}

export default CardsPage;