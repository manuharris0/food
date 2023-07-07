const axios = require('axios');

const RecipeService = require('../../services/recipeService');
const service = new RecipeService;

const getRecipeById = async (req, res) => {
    // Arreglar lo de la api key (no me la toma del .env)
    const { id } = req.params;
    
    if(isNaN(id)) {
        try {
            const recipe = await service.find(id);
            res.status(200).json(recipe);
        } catch (error) {
            res.status(404).json({err: error.message});
        }
    } else {
        try {
            const apiRecipe = await service.apiFind(id);
            res.status(200).json(apiRecipe)
        } catch (error) {
            res.status(404).json({err: error.message})
        };
    };
};

module.exports = getRecipeById;