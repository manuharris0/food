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
    } else res.status(400).json({message: 'Some name/id must be passed by query/params'});
};

module.exports = getRecipeByName;