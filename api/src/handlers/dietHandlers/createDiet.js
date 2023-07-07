const DietService = require("../../services/diestService");
service = new DietService();

const createDiet = async (req, res) => {
    try {
        const { name } = req.body;
        const newDiet = await service.create(name) 
        res.status(201).json(newDiet);
    } catch (error) {
        res.json(error.message);
    }           
};

module.exports = createDiet;