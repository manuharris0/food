const { Router } = require('express');

const getRecipeById = require('../handlers/recipeHandlers/getRecipeById');
const getRecipeByName = require('../handlers/recipeHandlers/getRecipeByName');
const postRecipe = require('../handlers/recipeHandlers/postRecipe');


const recipesRouter = Router();

recipesRouter.get('/', getRecipeByName);
recipesRouter.get('/:id', getRecipeById);
// Encontrar manera para definir si llegan querys, de ser asi se ejecutaría una presunta getRecipeByName, y de no hacerlo, la ya creada getRecipeById
recipesRouter.post('/', postRecipe);

module.exports = recipesRouter;