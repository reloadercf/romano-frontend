export default function(state={}, action) {
    switch (action.type) {
        case 'GET_NOTICIAS_ALL':
            return {...state, noticiasList:action.payload}
        case 'GET_NOTICIA_DETAIL':
            return {...state, noticiasData:action.payload}
        case 'GET_CATEGORIES':
            return {...state, categoriesData:action.payload}
        case 'GET_ARTICLE_CATEGORIES':
            return {...state, noticiasCategory:action.payload}
        case 'GET_DIRECTORIOS':
            return {...state, directories:action.payload}
        default:
            return state;
    }

} 