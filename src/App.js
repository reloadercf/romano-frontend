import React, { Component } from 'react';
import './App.css';
import {Layout} from 'antd';
import NavMenu from './components/navbar/NavMenu';
import Routes from './Routes';
import { HeaderSection } from './components/header/HeaderSection';
import { FooterSection } from './components/footer/FooterSection';

const {Content} = Layout;


class App extends Component {

  
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }



  render() {
    let{current}=this.state

    return (
       <Layout>
         <NavMenu/>
         <Layout className="layout-videos">
          <HeaderSection current={current} handleClick={this.handleClick}/>
          <Content className="content" >
           <Routes />
          </Content>

        <FooterSection/>
      
        </Layout>
      </Layout>
    
    );
  }
}

export default App;

