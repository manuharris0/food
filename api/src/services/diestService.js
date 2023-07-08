const axios = require('axios');
const { Diet } = require('../db')
const API_KEY = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=1&apiKey=36e35b29265846df8544054308236193`;

class DietService {
    constructor () {
        // Paso a paso para llenar la tabla de diets
        // Hacer esto solo si
        // 1. hacer la petición a axios de toda la info de las recetas
        // mapear response.data.results
        // por cada result entrar a lapropiedad diets
        // entrar en response.data.results.diets
        // Opcion 1 (Set)
        // pushear a this.diets todos los valores de diets
        // pasar el array a set para eliminar valores duplicados
        // hacerle un bulk create a Diet 
    };
    
    async generate() {
        try {
            const diets = [];
            const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=c218ab40b6854942b29ee5c97e23ef89');
            response.data.results.map(result => diets.push(result.diets));
            
            const dietsArr = diets.flatMap(subarray => {
                return subarray
            })
            const dietsSet = new Set(dietsArr);
            const bulkDiets = [...dietsSet];
            const definitiveDiets = bulkDiets.map((bulk) => {
                return {name: bulk};
            })
            const databaseDiets = await Diet.bulkCreate(definitiveDiets);
            return databaseDiets;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    async find() {
        const diets = await Diet.findAll({
            attributes: ['name']
         });
         return diets;
    };
    async create(name) {
        const newDiet = await Diet.create({name});
        return newDiet;
    };
};

module.exports = DietService;