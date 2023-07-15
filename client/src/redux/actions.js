import axios from 'axios';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE = 'GET_RECIPE';
export const ORDER_BY_HEALTH = 'ORDER_BY_HEALTH';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const FILTER_BY_DIET = 'FILTER_BY_DIET';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';

// Esto se trabaja así ya que en el type de la action iría un string, y es más fácil escribirlo mal ya que visual no autocompleta

// Función que trae todas las recetas:
export const getRecipes = () => {
    return async function(dispatch) {
        try {
            const apiData = await axios.get('http://localhost:3001/recipes');
            const recipes = apiData.data;
            console.log(recipes);
            dispatch({ type: GET_RECIPES, payload: recipes })
        } catch (error) {
            console.log(error);
        }
    }
};
 
// Función que trae una receta según id:
// export const getRecipe = (id) => {
//     return async function(dispatch) {
//         const apiData = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const recipe = apiData.data;
//         dispatch ({type: GET_RECIPE, payload: recipe});
//     };
// }
// // La action no puede hacer la request, si no que retorna una función que la hará


// // Función que ordena por nombre (será descendente o ascendente)
// export const orderByName = () => {
//     dispatch({ type: ORDER_BY_NAME }) 
// };

// // Función que ordena por saludabiidad (será descendente o ascendente)
// export const orderByHealth = () => {
//     dispatch({ type: ORDER_BY_HEALTH})
// };

// // Función que filtra por dieta:
// export const filterByDiet = () => {
//     dispatch({ type: FILTER_BY_DIET })
// };

// // Función que filtra por origen (API o BDD)
// export const filterByOrigin = () => {
//     dispatch({ type: FILTER_BY_ORIGIN })
// };