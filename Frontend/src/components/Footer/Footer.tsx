import logo from "../../assets/logo.png"

const Footer = () => {
	return (
		<div className="border-t border-solid  w-full border-gray-400 p-10 flex justify-between">
			<div className="w-1/3 items-center">
				<h2 className="text-3xl text-center">Ollie Pollie</h2>
				<img src={logo} className="w-20 m-auto"/>
			</div>
			<div>
				<ul className="grid grid-cols-2 gap-4">
					<li><a>Instagram</a></li>
					<li><a>Linkedin</a></li>
					<li><a>Facebook</a></li>
					<li><a>Twitter</a></li>
					<li><a>Presse</a></li>
					<li><a>Contact</a></li>
					<li><a>Recrutement</a></li>
					<li><a>Mentions légales</a></li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;