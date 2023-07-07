const axios = require('axios');

require('dotenv').config();
const {API_KEY} = process.env

const RecipeService = require('../../services/recipeService');
const service = new RecipeService;

const getRecipeById = async (req, res) => {
    // Arreglar lo de la api key (no me la toma del .env)
    const { id } = req.params;
    
    if(isNaN(id)) {
        try {
            const recipeDiets = await service.find(id);
            res.status(200).json(recipeDiets);
        } catch (error) {
            res.status(404).json({err: error.message});
        }
    } else {
        try {
            const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
            const response = await axios.get(URL);
            const diets = response.data.diets;
            res.status(200).json(diets)
        } catch (error) {
            console.log({err: error.message});
        }
    }
};

module.exports = getRecipeById;