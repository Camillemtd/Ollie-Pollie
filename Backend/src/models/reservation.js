module.exports = (sequelize, DataTypes) => {
	return sequelize.define('Reservation', {
	  id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	  },
	  lastName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		  notEmpty: { msg: "Le nom ne peut pas être vide" },
		  notNull: { msg: "Le nom est une propriété requise" },
		}
	  },
	  firstName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		  notEmpty: { msg: "Le prénom ne peut pas être vide" },
		  notNull: { msg: "Le prénom est une propriété requise" },
		}
	  },
	  numberOfPeople: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
		  notNull: { msg: "Le nombre de personnes est une propriété requise" },
		  min: {
			args: [1],
			msg: "Le nombre de personnes doit être supérieur ou égal à 1."
		  },
		  max: {
			args: [6],
			msg: "Le nombre de personnes doit être inférieur ou égal à 6."
		  },
		}
	  },
	  email: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		  isEmail: { msg: "L'adresse e-mail doit être valide" },
		  notNull: { msg: "L'adresse e-mail est une propriété requise" },
		}
	  },
	  date: {
		type: DataTypes.DATE, 
		allowNull: false,
		validate: {
		  notNull: { msg: "La date est une propriété requise" },
		  isDate: { msg: "La date doit être au format de date valide" }
		}
	  }
	});
  };