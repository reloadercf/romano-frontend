import React, { Component } from 'react';
import './App.css';
import {Layout} from 'antd';
import NavMenu from './components/navbar/NavMenu';
import Routes from './Routes';

const {Content, Footer} = Layout;


class App extends Component {
  render() {
    return (
    
       
      <Layout>
        <NavMenu/>   
          <Content

              style={{
              margin: '16px 16px 0'
              }}>
              <div style={{
                  padding: 24,
                  background: '#ffff',
                  marginTop: '20vh'
                  //minHeight: 800
              }}>
                <Routes/>
              </div>
          </Content>
          <Footer
              style={{
              textAlign: 'center'
          }}>
              REVISTA DIGITAL
          </Footer>
      </Layout>


    );
  }
}

export default App;
