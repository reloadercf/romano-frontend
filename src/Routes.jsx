import React from 'react'
import {Switch, Route} from 'react-router-dom';
import DetailContainer from './containers/DetailContainer'
import NotFound from './components/cards/NotFound'
import CategoriesPage from './components/categorias/CategoriesPage';
import DirectorioPage from './components/directorio/DirectorioPage';
import HomeContainer from './containers/HomeContainer';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Routes extends React.Component{

    render(){
        let{noticias}=this.props

        return(
          
                <Route render={({location})=> (
                    <TransitionGroup>
                        <CSSTransition  key={location.key} classNames="fade" timeout={300}>
                            <Switch >
                                <Route exact path="/" render={props => (<HomeContainer {...props} noticias={noticias} />)} />
                                <Route exact path="/detail/:slug_noticia" render={props => (<DetailContainer {...props} noticias={noticias} />)} />
                                <Route exact path="/modulo/:modulo_name" render={props => (<CategoriesPage {...props} noticias={noticias} />)} />
                                <Route exact path="/directorio" render={props => (<DirectorioPage {...props} />)} />
                                <Route path="*" component={NotFound} />

                            </Switch>


                        </CSSTransition>
                    </TransitionGroup>
                )} />
          

        
        )
    }
}

export default Routes