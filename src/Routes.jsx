import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import { Detail } from './components/cardDetail/Detail';
import NotFound from './components/cards/NotFound'

class Routes extends React.Component{

  
    
    render(){
        let{noticias}=this.props       
        return(
            <Switch>
                <Route exact path="/" render={props =>(<HomePage {...props} noticias={noticias} />)}/>      
                <Route exact path="/detail/:slug_noticia" render={props =>(<Detail {...props} noticias={noticias} />)}/> 
                <Route path="*" component={NotFound} />    
           
            </Switch>
        )
    }
}

export default Routes;