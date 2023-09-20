const { Sequelize, DataTypes } = require('sequelize')
const ReservationModel = require('../models/reservation')

const sequelize = new Sequelize("olliepollie", "root", "", {
	host: "localhost",
	dialect: "mariadb",
	dialectOptions: {
		timezone: "Etc/GMT-2"
	},
	logging: false
})

const Reservation = ReservationModel(sequelize, DataTypes)

const initDb = () => {
	return sequelize.sync().then((_) => {
		console.log("La base de donnée a bien été initialisée !");
	})
}

module.exports= {
	initDb,
	Reservation
}