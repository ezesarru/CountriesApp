const { Countries } = require ('../db')
const { Op } = require('sequelize')

const getCountriesByName = async (req, res) => {
    const { search } = req.query

    try {
        if(!search) {
            return res.status(404).json({ message: 'Empty query' })
        }

        const countries = await Countries.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${search}%`
                }
            }
        })

        if(!countries){
            return res.status(404).json({ message: 'Countries not found' })
        }

        return res.status(200).json(countries)

    } catch(error) {
        console.log(error)
        return res.status(501).json({ message: 'Internal server error' })
    }
}

module.exports = getCountriesByName