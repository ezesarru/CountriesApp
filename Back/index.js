//? Imports
const server = require("./src/server.js");
const { conn } = require('./src/db.js');

//? Utilities
const PORT = 3001

const startServer = async () => {
  try {
    await conn.sync({ force: true })
    server.listen(PORT, () => console.log(`Server raised in port: ${PORT}`))
  } catch(error) {
    console.log(error.message)
  }
}

startServer()