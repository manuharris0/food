// A continuación como funciona redux sin React

import { createStore } from "redux";
// Importamos la función que crea la store
import rootReducer from "./reducer";
// importamos al reducer que definimos

const store = createStore(rootReducer);
// Inicializamos el store pasandole el reducer a la función de creación

export default store;
// exportamos el store para consultarlo y/o modificarlo

// El problema con esta configuración es que no se pueden hacer operaciones asíncronas