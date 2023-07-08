const axios = require('axios');
const { Diet } = require('../db')
const API_KEY = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=1&apiKey=36e35b29265846df8544054308236193`;

class DietService {
    constructor () {
    };
    
    async generate() {
        try {
            const diets = [];
            const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=c218ab40b6854942b29ee5c97e23ef89');

            const dietsKeys = Object.keys(response.data.results[0]).slice(0, 3)
            diets.push(dietsKeys);

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