import cookie from "../assets/cookie.png"
import biscuitarachide from "../assets/biscuit.png"
import biscuitfromage from "../assets/biscuit2.png"

interface menu {
	name: string,
	image: string
}

const menus: menu[] = [
	{
		name: "Cookie au romarin",
		image: cookie
	},
	{
		name: "Biscuit au beurre d'arachide ",
		image: biscuitarachide
	},
	{
		name: "Biscuit au fromage",
		image: biscuitfromage,
	}
]

export default menus