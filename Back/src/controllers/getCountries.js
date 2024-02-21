const { Countries } = require('../db')

const getCountries = async (req, res) => {
    try {
        const allCountries = await Countries.findAll()
        return res.status(200).json(allCountries)

    } catch(error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports = getCountries