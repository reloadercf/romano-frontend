
import axios from 'axios'
const URL='http://127.0.0.1:8000';

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
