const { ValidationError } = require("sequelize");
const { Reservation } = require("../db/sequelize");

module.exports = (app) => {
  app.post("/api/reservation", (req, res) => {
    Reservation.create(req.body).then((reservation) => {
      const message = `Votre réservation au nom de ${req.body.lastName} à bien été crée`;
      res.json({ message, data: reservation });
    })
	.catch(error => {
		if(error instanceof ValidationError) {
			return res.status(400).json({ message: error.message, data: error })
		}
		const message = "Votre réservation n'a pas pu être ajouté. Réessayer dans quelques instant."
		res.status(500).json({ message, data: error })
	})
  });
};
