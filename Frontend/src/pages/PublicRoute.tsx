import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import Chef from "./Chef/Chef";
import Reservation from "./Réservation/Reservation";
import DogAdoption from "./dogAdoption/DogAdoption";
import CafeDescription from "./CaféDescription/CafeDescription";
import Adoption from "./Adoption/Adoption";


const PublicRoute = () => {
	return (
		<Routes>
			<Route element={<Layout/>}>
				<Route index element={<Home/>}/>

				<Route path="/home" element={<Home/>}/>
				<Route path="/chef" element={<Chef/>}/>
				<Route path="/reservation" element={<Reservation/>}/>
				<Route path="/dogadoption" element={<DogAdoption/>}/>
				<Route path="/cafedescription" element={<CafeDescription/>}/>
				<Route path="/adoption" element={<Adoption/>}/>

			</Route>
			
		</Routes>
	);
};

export default PublicRoute;