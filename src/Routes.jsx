import React from 'react'
import {Switch, Route} from 'react-router-dom';
import DetailContainer from './containers/DetailContainer'
import NotFound from './components/cards/NotFound'
import CategoriesPage from './components/categorias/CategoriesPage';
import DirectorioPage from './components/directorio/DirectorioPage';
import HomeContainer from './containers/HomeContainer';


class Routes extends React.Component{

    render(){
        let{noticias}=this.props
        
        return(
            <Switch>
                <Route exact path="/" render={props =>(<HomeContainer {...props} noticias={noticias} />)}/>      
                <Route exact path="/detail/:slug_noticia" render={props =>(<DetailContainer {...props}  noticias={noticias}   />)}/> 
                <Route exact path="/modulo/:modulo_name" render={props =>(<CategoriesPage {...props}  noticias={noticias} />)}/> 
                <Route exact path="/directorio" render={props =>(<DirectorioPage {...props}  />)}/> 
                <Route path="*" component={NotFound} />    

            </Switch>
        
        )
    }
}

export default Routes