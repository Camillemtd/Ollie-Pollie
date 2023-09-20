interface Description {
	image: string;
	title: string;
	description: string;
}

interface DescriptionCafeProps {
	description: Description;
	className?: string;
}

const DescriptionCafe: React.FC<DescriptionCafeProps> = ({ description, className }) => {
	return (
		<div className={`flex p-20 gap-40 ${className}`}>
			<div className="w-2/4">
				<img src={description.image} className="w-3/4" />
			</div>
			<div className="w-2/4 flex flex-col justify-center">
				<h3 className="text-3xl mt-10 mb-5">
					{description.title} :
				</h3>
				<span className="leading-10">
					{description.description}
				</span>
			</div>

		</div>
	);
};

export default DescriptionCafe;