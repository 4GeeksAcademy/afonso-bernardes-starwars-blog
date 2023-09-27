import React from "react";
import { CharacterCard } from "../component/characterCard";
import "../../styles/home.css";

export const Home = () => (
	<div className="mx-4 px-4 pb-5">
		<h2 className="text-white pb-4 pt-1">Characters</h2>
		<div className="container-fluid d-flex justify-content-between ps-0">
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
		</div>
	</div>
);
