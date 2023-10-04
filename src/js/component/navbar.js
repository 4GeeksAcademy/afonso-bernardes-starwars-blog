import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleDelete = (event, elementToDelete) => {
		actions.deleteFavourite(elementToDelete)
		console.log(store.favourites)
	}

	return (
		<nav className="navbar navbar-light bg-dark bg-gradient mb-3 px-5">
			<Link to="/">
				<img className="ms-4 w-25" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fstar-wars-logo-31.png&f=1&nofb=1&ipt=362c319cdc8800faf5fb476919f510ccf7877cf244c170f4db1c9886fc2580dc&ipo=images"></img>
			</Link>

			<div className="dropdown me-4">
				<button className="btn btn-secondary bg-dark dropdown-toggle pe-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favourites <span className="bg-white text-dark mx-2 px-2 rounded-circle">{store.favourites.length}</span>
				</button>

				<ul className="dropdown-menu py-0">
					{
						store.favourites.map( (element, idx) => {
							return (
								<li key={idx} className="d-flex justify-content-between">
									<a className="dropdown-item py-2 fw-bold" href="#"> {element.characterInfo.name} </a>
									<div className="btn" onClick={handleDelete(element)}>
										<FontAwesomeIcon className="me-1" icon={faTrash} />
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
		</nav>
	);
};
