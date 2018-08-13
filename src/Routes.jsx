import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import { Detail } from './components/cardDetail/Detail';

class Routes extends React.Component{

  
    
    render(){
        let{noticias}=this.props       
        return(
            <Switch>
                <Route exact path="/" render={props =>(<HomePage {...props} noticias={noticias} />)}/>      
                <Route path="/detail/:id_noticia" render={props =>(<Detail {...props} noticias={noticias} />)}/>        
            </Switch>
        )
    }
}

export default Routes;