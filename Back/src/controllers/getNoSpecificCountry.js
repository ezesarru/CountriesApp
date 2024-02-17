const { Countries } = require ('../db')
const { Op } = require('sequelize')

const getNoSpecificCountry = async (req, res) => {
    const { name } = req.query

    try {
        
        if(!name) {
            return res.status(404).json({ message: 'Empty query' })
        }

        const countries = await Countries.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });

        if(!countries || countries.length === 0){
            return res.status(404).json({ message: 'Countries not found' })
        }

        return res.status(200).json(countries)

    } catch(error) {
        console.log(error)
        return res.status(501).json({ message: 'Internal server error' })
    }
}

module.exports = getNoSpecificCountry