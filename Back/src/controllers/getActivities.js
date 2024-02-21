const { Activities } = require('../db')

const getActivities = async (req, res) => {
    try {
        const allActivities = await Activities.findAll()
        
        if(!allActivities.length){
            return res.status(402).json({ message: 'No activity found' })
        }

        return res.status(200).json(allActivities)

    } catch(error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports = getActivities