const RecipeService = require('../../services/recipeService');
const service = new RecipeService;

const postRecipe = async (req, res) => {
    try {
        const {name, image, summary, healthScore, steps, diets} = req.body;
        const lowerName = name.toLowerCase();
        const newRecipe = await service.create({
            name: lowerName,
            image,
            summary,
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