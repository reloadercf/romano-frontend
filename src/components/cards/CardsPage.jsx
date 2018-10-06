import React, { Component } from 'react';
import { CardList } from './CardsList.';


class CardsPage extends Component {
    render() {
        let {noticias}=this.props
        return (
            <CardList  noticias={noticias}/>
        );
    }
}

export default CardsPage;