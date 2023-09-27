const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favourites: [],
			characters: [],
			planets: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(characters => setStore( {"characters": [...characters.results]} ))
				.catch(err => console.error(err))
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(planets => setStore( {"planets": [...planets.results]} ))
				.catch(err => console.error(err))
			},
		}
	};
};

export default getState;
