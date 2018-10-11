import React, { Component } from 'react';
import {Row, Col, Input, Icon} from 'antd'
import './directorio.css'
import { DirectorioCard } from './DirectorioCard';
const Search = Input.Search;
const URL='https://www.mxplanb.xyz';

class DirectorioPage extends Component {


    state={
        directorios:[]
    }

    componentWillMount(){
        this.getDirectorios()
    }

    getDirectorios=()=>{
        let url =`${URL}/article/directorio/`
        var request = new Request(url, {
            method: 'GET',
            headers:new Headers({
                'Content-Type': 'application/json'
            }) 
        });
        fetch(request)
            .then(r => r.json())
            .then(data => {    
                this.setState({directorios: data})
                
            })
            .catch(e => {
      
            })
      }

    render() {
        let {directorios}=this.state
        return (
            <div>
                <div className="header_directorio">
                    <div className="overlay">
                        <h1>DIRECTORIO</h1>
                    </div>
                </div>
              
                <Row gutter={8} type="flex" justify="start"  style={{marginTop: "40px"}}>
                    <Col md={18} sm={24} xs={24} >
                        <div className="div_filtro">
                            <Search
                                placeholder="Buscar"
                                onSearch={value => console.log(value)}
                                enterButton
                            />
                        </div>
                    </Col>
                    <Col md={18} sm={24} xs={24} >
                        <div className="div_directorios">
                            {directorios && directorios.length > 0 ?
                                directorios.map((c, key) => (
                                    <div key={key} style={{marginTop:"30px"}} >
                                       <DirectorioCard {...c}  />      
                                    </div>
                                                                
                                )) :
                                <div>¡¡No hay noticias disponibles!!</div>
                            }
                           
                        </div>
                    </Col>

                    <Col md={6} sm={24} xs={24} >
                        <div className="div_directorio_tipo_dos">
                            {directorios && directorios.length > 0 ?
                                directorios.map((c, key) => (
                                    <div className="card">
                                        <h3>{c.cliente.nombre_patrocinador}</h3>
                                        <hr />
                                        <p>{c.direccion}</p>
                                        <div className="card_directorio_info_telefonos">
                                            <Icon type="phone" theme="filled" style={{ marginRight: "8px", fontSize: "18px" }} />
                                            <div className="card_directorio_info_numeros">
                                                <span>{c.telefono}</span>
                                                <span>{c.telefonodos}</span>
                                            </div>
                                        </div>
                                        <div className="category">
                                            <span>{c.categori.categoria}</span>
                                        </div>

                                    </div>

                                )) :
                                <div>¡¡No hay noticias disponibles!!</div>
                            }

                        </div>

                        
                    </Col>
                </Row>

                 

            </div>
        );
    }
}

export default DirectorioPage;