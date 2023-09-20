import dog1 from "../assets/dogadoption1.png";
import dog2 from "../assets/dogadoption2.png";
import dog3 from "../assets/dogadoption3.png";
import dog4 from "../assets/dogadoption4.png";

interface dogAdoption {
	name: string,
	age: number,
	race: string,
	picture: string,
	arrival_date: string,
	story: string,
	personality: string,
	behavior: string,
	compatibility: string,
	health: string,
	adoption: string
}

const dogsAdoptions: dogAdoption[] = [
	{
		name: 'Max',
		age: 5,
		race: "labrador",
		picture: dog1,
		arrival_date: '15/06/2022',
		story: "Max est un Labrador Retriever aimant et bienveillant qui a eu un début de vie difficile. Il a été récupéré par notre association avec le désir de lui offrir une seconde chance dans la vie. Malgré les épreuves qu'il a traversées, Max conserve une personnalité douce et un cœur généreux.",
		personality: "Max est un chien extrêmement amical et sociable. Il adore la compagnie des humains et est toujours prêt pour des câlins et des moments de tendresse. Sa joie de vivre est contagieuse, et il sait comment apporter de la chaleur à chaque foyer.",
		behavior:"Max est un chien bien éduqué et obéissant. Il sait marcher en laisse, répond aux commandes de base, et est propre à l'intérieur. Il est également très actif et aime jouer à la balle et se promener en plein air. Cependant, il est tout aussi heureux de se détendre à vos côtés lors de soirées tranquilles.",
		compatibility:"Max s'entend bien avec d'autres chiens et est un excellent compagnon pour les familles. Il est doux avec les enfants et peut s'intégrer facilement dans un foyer où il recevra l'amour et l'attention qu'il mérite.",
		health:"Max est en bonne santé, vacciné et castré. Il a été examiné par un vétérinaire et a reçu tous les soins nécessaires.",
		adoption:"Si vous recherchez un ami loyal et affectueux qui apportera de la joie à votre vie, Max pourrait être le chien parfait pour vous. Contactez-nous pour en savoir plus sur l'adoption de Max et sur la façon dont vous pouvez lui offrir une maison aimante et chaleureuse."
	},
	{
		name: 'Charlie',
		age: 5,
		race: "Cavalier King Charles",
		picture: dog4,
		arrival_date: '02/08/2023',
		story: "Charlie est un Cavalier King Charles de seulement 5 mois. Il est encore tout jeune et a besoin d'un foyer aimant pour grandir et s'épanouir. Charlie est plein de vitalité et d'enthousiasme pour la vie.",
		personality: "Charlie est un chiot enjoué et plein de curiosité. Il aime jouer et explorer son environnement. Il est très attachant et cherche constamment l'affection de ses proches.",
		behavior: "Charlie est en cours d'apprentissage des règles de base de la vie en famille. Il est intelligent et réceptif à l'entraînement. Avec une éducation appropriée, il deviendra un chien bien équilibré et obéissant.",
		compatibility: "Charlie s'entend bien avec d'autres chiens et est adapté aux familles avec des enfants. En raison de son âge, il nécessite une supervision appropriée et une socialisation continue.",
		health: "Charlie est en bonne santé, vacciné et suivi par un vétérinaire. Il est prêt à rejoindre une famille aimante qui l'aidera à grandir.",
		adoption: "Si vous cherchez un chiot joyeux et affectueux pour compléter votre famille, Charlie pourrait être le choix idéal. Contactez-nous pour en savoir plus sur l'adoption de Charlie."
	},
	{
		name: 'Buddy',
		age: 2,
		race: "Colley",
		picture: dog2,
		arrival_date: '10/04/2022',
		story: "Buddy est un Colley intelligent et plein de vie âgé de 2 ans. Il a été secouru il y a quelques mois et est prêt à trouver sa famille pour la vie.",
		personality: "Buddy est un chien énergique et loyal. Il est intelligent et aime les activités qui stimulent son esprit. Il est aussi très attaché à ses proches et se montre protecteur envers sa famille.",
		behavior: "Buddy est bien éduqué et obéissant. Il répond bien aux commandes et est capable de marcher en laisse sans problème. Il est également propre à l'intérieur.",
		compatibility: "Buddy est sociable avec d'autres chiens et convient aux familles actives. Il aime les activités de plein air et serait le partenaire idéal pour les randonnées et les jeux en extérieur.",
		health: "Buddy est en excellente santé, vacciné et stérilisé. Il a été régulièrement examiné par un vétérinaire.",
		adoption: "Si vous recherchez un chien intelligent, actif et loyal, Buddy pourrait être le compagnon parfait pour vous. Contactez-nous pour en savoir plus sur l'adoption de Buddy."
	},
	{
		name: 'Lucy',
		age: 3,
		race: "Terrier",
		picture: dog3,
		arrival_date: '07/11/2021',
		story: "Lucy est une Terrier de 3 ans qui a été sauvée il y a presque deux ans. Elle est prête à trouver une famille qui l'aimera pour toujours.",
		personality: "Lucy est une chienne joyeuse et pleine d'énergie. Elle adore jouer à la balle et se promener en plein air. Elle est également affectueuse et apprécie les moments de câlins.",
		behavior: "Lucy est bien éduquée et propre à l'intérieur. Elle est également réceptive à l'entraînement et obéissante. Elle peut marcher en laisse sans problème.",
		compatibility: "Lucy s'entend bien avec d'autres chiens et convient aux familles. Elle est également douce avec les enfants et peut être une compagne aimante pour tous les membres de la famille.",
		health: "Lucy est en excellente santé, à jour de ses vaccins et stérilisée. Elle a été suivie de près par un vétérinaire pendant son séjour chez nous.",
		adoption: "Si vous cherchez une chienne énergique, affectueuse et prête à devenir un membre de votre famille, Lucy pourrait être la compagne idéale. Contactez-nous pour en savoir plus sur l'adoption de Lucy."
	}
]

export default dogsAdoptions;