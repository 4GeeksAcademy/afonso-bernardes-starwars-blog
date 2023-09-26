const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favourites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(characters => console.log(characters))
				.catch(err => console.error(err))
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(planets => console.log(planets))
				.catch(err => console.error(err))
			},
		}
	};
};

export default getState;
