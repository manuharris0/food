const DietService = require("../../services/diestService");
service = new DietService();

const createDiet = async (req, res) => {
    try {
        const { name } = req.body;
        if(!name) throw new Error('Missing information needed to create the diet')
        const newDiet = await service.create(name.toLowerCase())
        res.status(201).json(newDiet);
    } catch (error) {
        res.status(400).json({error: error.message});
    }           
};

module.exports = createDiet;