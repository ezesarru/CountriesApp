//? Imports
const server = require("./src/server.js");
const { connection, Countries } = require('./src/db.js');
const axios = require('axios')

//? Utilities
const PORT = 3001
const API_URL = 'http://localhost:5000/countries'

const startServer = async () => {
  try {
    await connection.sync({ force: true }) //! true borra
    await saveInformation()
    server.listen(PORT, () => console.log(`Server raised in port: ${PORT}`))
  } catch(error) {
    console.log('Server not started', error.message)
  }
}

const saveInformation = async () => {
  try {
    const { data } = await axios(API_URL)

    for(let { cca3, name, flags, region, capital, subregion, area, population } of data) {

      const notApply = "N/A"
      const countryCapital = Array.isArray(capital) && capital[0] || notApply
      const countrySubcontinent = subregion || notApply
      const countryName = name.common || name.official
      const countryArea = area + ' m²'

      await Countries.findOrCreate({
        where: { id: cca3 },
        defaults: {
          name: countryName,
          flag: flags.png,
          continent: region,
          capital: countryCapital,
          subcontinent: countrySubcontinent,
          area: countryArea,
          population
        }
      })
    }
    console.log('Information saved')

  } catch(error) {
    console.log('Information not saved', error)    
  }
}

startServer()