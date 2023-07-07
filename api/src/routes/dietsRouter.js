const { Router } = require('express');
const getDiets = require('../handlers/dietHandlers/getDiets');
const createDiet = require('../handlers/dietHandlers/createDiet');
// Acá requiero los hanlders para routear

const dietRouter = Router();

dietRouter.get('/', getDiets);
dietRouter.post('/', createDiet);

module.exports = dietRouter;