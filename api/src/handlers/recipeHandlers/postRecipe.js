const RecipeService = require('../../services/recipeService');
const service = new RecipeService;

const postRecipe = async (req, res) => {
    try {
        const {name, image, resume, healthScore, steps, diets} = req.body;
        const newRecipe = await service.create({
            name,
            image,
            resume,
            healthScore,
            steps,
            diets
       });
        res.status(201).json(newRecipe)
    } catch (error) {
        res.status(400).json({err: error.message});
    }
};
// Probar los constrains y las validacionesa
module.exports = postRecipe;