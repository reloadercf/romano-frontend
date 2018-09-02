import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import 'moment/locale/fr';
import {BrowserRouter} from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers'
import ScrollMemory from 'react-router-scroll-memory';

const createStoreWithMiddleware=applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(

<Provider store={createStoreWithMiddleware(reducers)}>
   
    <BrowserRouter >
        <div>
            <ScrollMemory />
            <App/>
        </div>
        
    </BrowserRouter>
   
</Provider>, document.getElementById('root'));


//registerServiceWorker();
