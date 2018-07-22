import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import { CardDetail } from './components/cardDetail/CardDetail';

class Routes extends React.Component{
    
    render(){
        
        return(
            <Switch>
                <Route exact path="/" component={HomePage}/>     
                <Route exact path="/detail" component={CardDetail}/>    
                
            </Switch>
        )
    }
}

export default Routes;