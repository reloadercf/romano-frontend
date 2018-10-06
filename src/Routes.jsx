import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import { Detail } from './components/cardDetail/Detail';
import DetailContainer from './containers/DetailContainer'
import NotFound from './components/cards/NotFound'
import CategoriesPage from './components/categorias/CategoriesPage';
import DirectorioPage from './components/directorio/DirectorioPage';


class Routes extends React.Component{

  
    
    render(){
        let{noticias}=this.props       
        return(
            <Switch>
                <Route exact path="/" render={props =>(<HomePage {...props}  />)}/>      
                <Route exact path="/detail/:slug_noticia" render={props =>(<DetailContainer {...props}  />)}/> 
                <Route exact path="/modulo/:modulo_name" render={props =>(<CategoriesPage {...props}  />)}/> 
                <Route exact path="/directorio" render={props =>(<DirectorioPage {...props}  />)}/> 
                <Route path="*" component={NotFound} />    

            </Switch>
        
        )
    }
}

export default Routes