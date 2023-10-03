import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mx-4 px-4 pb-5">
			<h2 className="text-white pb-4 pt-1">Characters</h2>
			<div className="container-fluid overflow-auto d-flex justify-content-between ps-0">
				{
					store.charactersDetails.map( (element, idx) => {
						return <CharacterCard key={idx} characterInfo={element} />;
					})
				}
			</div>
		</div>
	);
};
