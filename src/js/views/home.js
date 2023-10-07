import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mx-4 px-4 pb-5">
			<h2 className="text-white pb-4 pt-1">Characters</h2>
			<div className="container-fluid overflow-auto d-flex justify-content-between ps-0">
				{
					store.charactersDetails.map( (element, idx) => {
						return <CharacterCard key={idx} info={element} />;
					})
				}
			</div>
			
			<h2 className="text-white pb-4 pt-1 mt-5">Planets</h2>
			<div className="container-fluid overflow-auto d-flex justify-content-between ps-0">
				{
					store.planetsDetails.map( (element, idx) => {
						return <PlanetCard key={idx} info={element} />;
					})
				}
			</div>
		</div>
	);
};
