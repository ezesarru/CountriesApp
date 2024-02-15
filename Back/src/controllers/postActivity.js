const { Activities } = require('../db')

const postActivity = async (req, res) => {
    try {
        const { id, name, difficulty, duration, season } = req.body

        if( id && name && difficulty && duration && season) {
            const [ newActivity, created] = await Activities.findOrCreate({
                where: { id, name, difficulty, duration, season }
            })

            if(newActivity){
                return res.status(200).json({ message: 'Activity created', newActivity })
            }
        }
        return res.status(400).json({ message: 'Missing data' })
        
    } catch(error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports = postActivity