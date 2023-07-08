const DietService = require("../../services/diestService");
service = new DietService();

const getDiets = async (req, res) => {
    try {
        const diets = await service.find();
        if(diets.length > 0) res.status(200).json(diets);
        else {
            const apiDiets = await service.generate();
            res.status(200).json(apiDiets);
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = getDiets;