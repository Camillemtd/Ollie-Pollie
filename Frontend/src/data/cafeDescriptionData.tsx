import social from "../assets/social.png";
import aliment from "../assets/aliment.png"
import confort from "../assets/confort.png"
import evenement from "../assets/evenement.png"
import training from "../assets/dressage.png"
import refuge from "../assets/refuge.png"
import boutique from "../assets/boutique.png"

interface cafeDescription {
  title: string;
  description: string;
  image: string;
}


const cafeDescriptions: cafeDescription[] = [
  {
    title: "Espace Social pour Chiens",
    description:
      " Notre café offre un espace spacieux et sûr où les chiens peuvent jouer, courir et interagir avec d'autres toutous. Nous avons aménagé des aires de jeu intérieures et extérieures pour que nos amis à fourrure se défoulent.",
    image: social,
  },
  {
	title: "Menu Canin Gourmet",
	description: "Notre chef canin talentueux prépare des repas et des friandises savoureuses spécialement conçus pour les chiens. Des gâteaux d'anniversaire aux biscuits faits maison, vos amis à pattes auront l'embarras du choix.",
	image: aliment
  },
  {
	title: "Événements et Activités",
	description: "Nous organisons régulièrement des événements spéciaux, des séances de formation et des fêtes pour les chiens. De la fête de l'Halloween à la Saint-Valentin canine, chaque jour est une occasion de célébrer avec nos amis à quatre pattes.",
	image: evenement
  },
  {
	title: "Confort pour les Humains ",
	description: "Les propriétaires de chiens ne sont pas en reste. Notre café dispose d'un coin café confortable où vous pouvez déguster des boissons chaudes et froides, ainsi que des pâtisseries, tout en observant vos compagnons à quatre pattes s'amuser.",
	image: confort
  },
  {
	title: "Adoption Responsable",
	description: "Nous croyons en l'adoption responsable. En partenariat avec des refuges locaux, nous organisons des journées d'adoption pour aider les chiens sans abri à trouver des foyers aimants.",
	image: refuge
  },
  {
	title: "Formation Canine ",
	description: "Vous trouverez également des séances de formation et des conseils d'experts en comportement canin pour aider à éduquer et à renforcer les liens avec votre chien.",
	image: training
  },
  {
	title: "Boutique Canine",
	description: "Notre boutique propose une gamme de produits soigneusement sélectionnés, des jouets aux accessoires, pour gâter vos amis à pattes.",
	image: boutique
  },
];

export default cafeDescriptions;
