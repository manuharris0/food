const axios = require('axios');
const { Recipe, Diet } = require('../db');
const API_KEY = process.env;
const URL = `https://spoonacular.com/food-api/docs#Diets?${API_KEY}`;


class RecipeService {
    // Acá van a estar todos los controllers de recipes (las consultas a la bd)
    constructor() {};

    // Métodos que interactúan con la base de datos
    async find(id) {
        const recipeDiets = await Recipe.findByPk(id, {
            include: {
                attributes: [],
                // Casi perfecto, falta que no devuelva la info de la receta, si no solo la de las dietas asociadas (que ya lo hace)
                model: Diet,
                attributes: ["name"],

                through: {
                    attributes: []
                }    
            }
        });
        if(!recipeDiets) throw new Error(`No se encontró personaje con id ${id}`)
        return recipeDiets;
    };

    async create({name, image, resume, healthScore, steps, diets}) {
        const newRecipe = await Recipe.create({
            name,
            image,
            resume,
            healthScore,
            steps
        });
        newRecipe.addDiets(diets);
        return newRecipe;
       // Probar los constrains y las validacionesa
    };

    findOne(name) {
        return `Emulo que busco la receta con simil nombre: ${name}`
    }
};

module.exports = RecipeService;