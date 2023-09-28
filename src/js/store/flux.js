const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favourites: [],
			characters: [],
			charactersDetails: [],
			planets: [],
			planetsDetails: [],
		},

		actions: {
			// Use getActions to call a function within a fuction
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(characters => {
					setStore( {"characters": [...characters.results]} )
					getActions().loadCharactersDetails(getStore().characters)
				})
				//.then(lol => console.log("Characters array: ", getStore().characters))
				.catch(err => console.error("Error on loadCharacters: ", err))
			},

			loadCharactersDetails: (simpleCharList) => {
				simpleCharList.forEach(element => {
					fetch(element.url)
					.then(res => res.json())
					.then(charactersData => setStore( {"charactersDetails": [...getStore().charactersDetails, charactersData.result.properties]} ))
					//.then(lol => console.log("charactersDetails array: ", getStore().charactersDetails))
					.catch(err => console.error("Error on loadCharactersDetails: ", err))
				})
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(planets => {
					setStore( {"planets": [...planets.results]} )
					getActions().loadPlanetsDetails(getStore().planets)
				})
				//.then(lol => console.log("Planets array: ", getStore().planets))
				.catch(err => console.error("Error on loadPlanets: ", err))
			},

			loadPlanetsDetails: (simplePlanetList) => {
				simplePlanetList.forEach(element => {
					fetch(element.url)
					.then(res => res.json())
					.then(planetData => setStore( {"planetsDetails": [...getStore().planetsDetails, planetData.result.properties]} ))
					//.then(lol => console.log("planetsDetails array: ", getStore().planetsDetails))
					.catch(err => console.error("Error on loadPlanetsDetails: ", err))
				})
			},
		}
	};
};

export default getState;
