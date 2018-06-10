import React, { Component } from 'react';

import {Layout} from 'antd';
import NavMenu from './components/navbar/NavMenu';
import Routes from './Routes';
const {Header, Content, Footer} = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <NavMenu/>
      <Layout>
        
          <Content
              style={{
              margin: '24px 16px 0'
          }}>
              <div style={{
                  padding: 24,
                  background: '#fff',
                  minHeight: 800
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
  </Layout>

    );
  }
}

export default App;
