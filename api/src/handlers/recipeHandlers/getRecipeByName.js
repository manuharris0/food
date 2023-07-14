const RecipeService = require("../../services/recipeService");
const service = new RecipeService;

const getRecipeByName = async (req, res) =>  {
    const { name } = req.query
    if(name) {
        try {
            const recipe = await service.findOne(name)
            res.status(200).json(recipe);
        } catch (error) {
            res.status(404).json({err: error.message});
        };
    } else {
        try {
            const allRecipes = await service.findAll();
            res.status(200).json(allRecipes)
        } catch (error) {
            res.status(500).json({err: error.message});
        }
    }
};

module.exports = getRecipeByName;