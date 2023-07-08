const axios = require('axios');
const { Recipe, Diet } = require('../db');
const { Op } = require('sequelize');
require('dotenv').config();
const API_KEY = process.env;

class RecipeService {
    
    constructor() {};

    async apiFind(id) {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=36e35b29265846df8544054308236193`)
    // Falta dejar la apikey como una variable para no subirla a git hub
            const { title, image, summary, diets, healthScore } = response.data
            const stepsBySteps = response.data.analyzedInstructions[0].steps;
            const steps = [];
            stepsBySteps.map((step) => steps.push(step.step));
    
            const info = ({
                name: title,
                image,
                summary,
                healthScore,
                steps,
                diets
            });
            return info
    
            } catch (error) {
            return error.message;
        }
    };
        
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

    async create({name, image, summary, healthScore, steps, diets}) {
        if(!name || !image ||!summary || !healthScore ||!steps) throw new Error('Missing information needed to create the recipe');
        const newRecipe = await Recipe.create({
            name,
            image,
            summary,
            healthScore,
            steps
        });
        newRecipe.addDiets(diets);
        // Método de los modelos para agregarse en la tabla intermedia
        return {
            status: 'Created',
            'New recipe': newRecipe,
            'Diets': diets
        };
       // Probar los constrains y las validacionesa
    };

    async findOne(query) {
        const recipes = await Recipe.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${query}%`
                }
            },
            attributes: ['name']
        });
        const matchedRecipes = [];
        recipes.map(recipe => matchedRecipes.push(recipe.name));
        try {
            const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=36e35b29265846df8544054308236193');
            const loweQuery = query.toLowerCase();
            response.data.results.map((result) => {
                if(result.title.toLowerCase().includes(loweQuery)) {
                    matchedRecipes.push(result.title);
                };
            });
            return matchedRecipes;
        } catch (error) {
            throw new Error(`no matches found with ${query}`);
        };
    };
};

module.exports = RecipeService;