import React, { Component } from 'react';
import './App.css';
import {Layout} from 'antd';
import NavMenu from './components/navbar/NavMenu';
import Routes from './Routes';
import logo from './logo.png'
const {Header, Content, Footer} = Layout;


const style={
    logo:{
        width: "auto",
        height: "80px"
    }
}
class App extends Component {
  render() {
    return (
      <Layout>
        <NavMenu/>
       
      <Layout>
        <div className="div-logo" >
           <img src={logo} style={style.logo} alt=""/>
        </div>
        
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
