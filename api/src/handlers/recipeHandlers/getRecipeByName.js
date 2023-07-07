const RecipeService = require("../../services/recipeService");

const service = new RecipeService;

const getRecipeByName = async (req, res) =>  {
    const { name } = req.query
    if(name) {
        try {
            const recipe = await service.findOne(name)
            res.status(200).json(recipe);
        } catch (error) {
            res.json({err: error.message});
        };
    } else res.status(300).send('no se pasó query, podría devolver todas las recetas (probablemente no)')
};

module.exports = getRecipeByName;