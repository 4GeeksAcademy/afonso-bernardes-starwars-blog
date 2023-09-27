const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favourites: [],
			characters: [],
			charactersDetails: [],
			planets: [],
		},

		actions: {
			// Use getActions to call a function within a fuction
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(characters => setStore( {"characters": [...characters.results]} ))
				.then(lol => console.log(getStore().characters))
				.catch(err => console.error(err))
			},

			loadCharactersDetails: (chararcterUrl) => {
				fetch(`${chararcterUrl}`)
				.then(res => res.json())
				.then(lol => console.log(lol.results))
				.then(characters => setStore( {"charactersDetails": [...characters.properties]} ))
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
