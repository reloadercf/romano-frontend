
import axios from 'axios'
const URL='https://www.mxplanb.xyz';
//const  region='asturias'



export function renderRegion(){
    const request=axios.get(`${URL}/article/articulofiltro/`)
                            .then(response=>response.data)
    return {
        type:'GET_REGION',
        payload:request
    }
}

export function noticiasListAll(){
    const request=axios.get(`${URL}/article/articulofiltro/`)
                            .then(response=>response.data)
    return {
        type:'GET_NOTICIAS_ALL',
        payload:request
    }
}


export function noticiaDetail(slug){
    const request=axios.get(`${URL}/article/articulofiltro/?slug=${slug}`)
                          .then(response=>response.data)
  return {
      type:'GET_NOTICIA_DETAIL',
      payload:request
  }
}

export function categories(){
    const request=axios.get(`${URL}/article/categorias/`)
                          .then(response=>response.data)
  return {
      type:'GET_CATEGORIES',
      payload:request
  }
}


export function noticiasCategoriAll(categoria){
    const request=axios.get(`${URL}/article/articulofiltro/?q=${categoria}`)
                          .then(response=>response.data)
  return {
      type:'GET_ARTICLE_CATEGORIES',

      
      payload:request
  }
}


export function directoriosall(){
    const request=axios.get(`${URL}/article/directorio/`)
                          .then(response=>response.data)
  return {
      type:'GET_DIRECTORIOS',
      payload:request
  }
}
