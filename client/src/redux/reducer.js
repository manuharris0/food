import {
    // GET_RECIPE,
    GET_RECIPES,
    // ORDER_BY_HEALTH,
    // ORDER_BY_NAME,
    // FILTER_BY_DIET,
    // FILTER_BY_ORIGIN
} from "./actions";

// Este es el estado inicial que comienza vacío
const initialState = {
    recipes: []
};

// Única función capaz de modificar el estado global
// Esta recibe el estado a modificar (al principio cuando no haya estado se le da uno inicial), y la action que le dice que hacer

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RECIPES:
            return {...state, recipes: action.payload};
            // retorno una copia del estado, y lo que quiero modificar, en este caso se modifica todo, pero en un ejemplo donde se actualiza solo un usuario, si no hacemos la copia se sobreescribe todo el estado solo con ese usuario.
            // Redux no modifica el estado, LO PISA, sevolviendo uno nuevo
        // case GET_RECIPE:
        //     // Retornará una receta en específico (esto podría usarlo para el buscar por id [capaz también para el name], y por ahí para el detail)
        // case ORDER_BY_HEALTH:
        //     // Acá devolverá el estado ordenado por la salud
        // case ORDER_BY_NAME:
        //     // Lo mismo pero por name
        // case FILTER_BY_DIET:
        //     // filtrará y devolverá solo los que coincidad con la dieta
        // case FILTER_BY_ORIGIN:
            // Devolverá las recetas de la api o de la bdd
        default:
            return {...state};
    };
}; 

export default rootReducer;