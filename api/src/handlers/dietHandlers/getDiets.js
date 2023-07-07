const DietService = require("../../services/diestService");
service = new DietService();

const getDiets = async (req, res) => {
    try {
        const diets = await service.find() 
        res.status(200).json(diets);
    } catch (error) {
        res.json(error.message);
    }
};

module.exports = getDiets;