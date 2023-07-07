const axios = require('axios');
const { Diet } = require('../db')
const API_KEY = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=1&apiKey=36e35b29265846df8544054308236193`;

class DietService {
    constructor () {
        // Paso a paso para llenar la tabla de diets
        // 1. hacer la petición a axios de toda la info de las recetas
        // entrar en response.data.results.diets
    };
    async generate() {
        try {
            const response = await axios.get(URL)
            this.diets.push(response.data)
            return this.diets;
        } catch (error) {
            console.log(error);
        }
    };
    async find() {
        if(this.diets.length) {
          return this.diets;
        } else throw new Error('No se encontraron dietas');
    };
    async create(name) {
        const newDiet = await Diet.create({name});
        return newDiet;
    };
};

module.exports = DietService;