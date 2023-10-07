import { sortBy } from "lodash"

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
					.then(charactersData => setStore( {"charactersDetails": [...getStore().charactersDetails, {...charactersData.result.properties, "uid": element.uid, image: `https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`}].sort( (a, b) => a.uid - b.uid ) }))
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
					.then(planetData => setStore( {"planetsDetails": [...getStore().planetsDetails, {...planetData.result.properties,  "uid": element.uid, image: `https://starwars-visualguide.com/assets/img/planets/${element.uid}.jpg`}].sort( (a, b) => a.uid - b.uid ) }))
					//.then(lol => console.log("planetsDetails array: ", getStore().planetsDetails))
					.catch(err => console.error("Error on loadPlanetsDetails: ", err))
				})
			},

			addFavourite: (item) => {
				// Avoid adding duplicates to favourites.
				let duplicate = false
				getStore().favourites.forEach( (element) => {
					if (item.info.uid == element.info.uid) {
						duplicate = true
					};
				})

				if (!duplicate) {
					setStore( {"favourites": [...getStore().favourites, item] })
				};
			},

			deleteFavourite: (itemToDelete) => {
				let favourites = [];
				getStore().favourites.forEach((element) => {
					if (element.info["uid"] != itemToDelete["uid"]) {
						favourites.push(element)
					}
				})
				setStore( {"favourites": favourites} )
				/*setStore( {"favourites": getStore().favourites.filter(element => {
					console.log(element.info["uid"] != itemToDelete["uid"])
					element.info["uid"] != itemToDelete["uid"]
				})})*/
			},
		}
	};
};

export default getState;
