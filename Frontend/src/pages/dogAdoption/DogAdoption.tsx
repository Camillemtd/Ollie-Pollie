import { useLocation } from 'react-router-dom';

const DogAdoption = () => {
	let { state } = useLocation()
	console.log(state)

	return (
		<div className="min-h-screen flex pt-48 pb-48 p-20 gap-10 bg-slate-200 bg-opacity-25 animationPage">
			<div className='w-3/4 '>
				<img src={state.some.picture} className='w-full h-full rounded-full object-cover max-w-lg'/>
			</div>
			<div className='flex flex-col'>
				<h2 className='text-6xl'>{state.some.name}</h2>
				<span>{state.some.race}</span>
				<span>{state.some.age} ans</span>
				<span>Date d'arrivée : {state.some.arrival_date}</span>
				<h3 className='text-3xl mt-10 mb-5'>Son Histoire : </h3>
				<span>{state.some.story}</span>
				<h3 className='text-3xl mt-10 mb-5'>Personnalité : </h3>
				<span>{state.some.personality}</span>
				<h3 className='text-3xl mt-10 mb-5'>Comportement : </h3>
				<span>{state.some.behavior}</span>
				<h3 className='text-3xl mt-10 mb-5'>Compatibilité : </h3>
				<span>{state.some.compatibility}</span>
				<h3 className='text-3xl mt-10 mb-5'>Santé : </h3>
				<span>{state.some.health}</span>
				<h3 className='text-3xl mt-10 mb-5'>Adoption : </h3>
				<span>{state.some.adoption}</span>

			</div>
		</div>
	);
};

export default DogAdoption;