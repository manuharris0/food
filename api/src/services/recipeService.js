const axios = require('axios');
const { Recipe, Diet } = require('../db');
require('dotenv').config();
const API_KEY = process.env;

class RecipeService {
    
    constructor() {};

    async apiFind(id) {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=36e35b29265846df8544054308236193`)
    
            const { title, image, summary, diets } = response.data
            const stepsBySteps = response.data.analyzedInstructions[0].steps;
            const stepInfo = [];
            stepsBySteps.map((step) => stepInfo.push(step.step));
    
            const info = ({
                title,
                image,
                summary,
                diets,
                stepInfo
            });
            return info
    
            } catch (error) {
            return error.message;
        }
    }   
        
    async find(id) {
        const recipe = await Recipe.findByPk(id, {
            include: {
                
                model: Diet,
                attributes: ["name"],

                through: {
                    attributes: []
                }    
            }
        });
        if(!recipe) throw new Error(`No recipe found with id: ${id}`)
        return recipe;
    };

    async create({name, image, resume, healthScore, steps, diets}) {
        if(!name || !image ||!resume || !healthScore ||!steps) throw new Error('Missing information needed to create the recipe');
        const newRecipe = await Recipe.create({
            name,
            image,
            resume,
            healthScore,
            steps
        });
        newRecipe.addDiets(diets);
        // Método de los modelos para agregarse en la tabla intermedia
        return {
            status: 'Created',
            'New recipe': newRecipe
        };
       // Probar los constrains y las validacionesa
    };

    findOne(name) {
        return `Emulo que busco la receta con simil nombre: ${name}`
    }
};

module.exports = RecipeService;