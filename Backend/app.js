const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const sequelize = require('./src/db/sequelize')



const app = express()
const port = 3000

app
	.use(bodyParser.json())
	.use(cors())

sequelize.initDb()

require('./src/routes/CreateReservation')(app)

app.use(({res}) => {
	const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
	res.status(404).json(message) 
})

app.listen(port, () => console.log(`Notre application Node est démarré sur : http://localhost:${port}`))