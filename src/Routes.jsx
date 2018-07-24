import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import { Detail } from './components/cardDetail/Detail';

class Routes extends React.Component{
    
    render(){
        
        return(
            <Switch>
                <Route exact path="/" component={HomePage}/>     
                <Route exact path="/detail" component={Detail}/>    
                
            </Switch>
        )
    }
}

export default Routes;