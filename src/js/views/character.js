import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characterView.css"

export const Character = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container-fluid text-center">
			<div className="row d-flex mx-5 mt-2">
				<img className="col-sm-12 col-md-4 col-lg-5 px-4" src={store.charactersDetails[params.uid-1].image}></img>
            	
				<div className="col-sm-12 col-md-8 col-lg-7">
					<h1 className="display-3 mb-5 text-white fw-bold">{store.charactersDetails[params.uid-1].name}</h1>
					
					<div className="text-left text-white fs-1">
						<p className="text-white fs-2 pt-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut dui facilisis, maximus urna et, venenatis ligula. Morbi rhoncus elit a laoreet tempor. Phasellus id eros blandit tellus ultricies dignissim tempor ut ligula. Curabitur auctor, ex quis venenatis mattis, lectus erat maximus magna, eu imperdiet est magna et ipsum. Sed neque turpis, imperdiet quis maximus eu, maximus in sapien.
						</p>

						<p className="text-left text-white fs-2 pt-0">
							Vivamus sed nisi at orci porta luctus at ac est. Cras eget sollicitudin magna, ac pulvinar metus. Aliquam ac scelerisque orci, sit amet accumsan ligula. Pellentesque dolor dui, mollis vel dui et, ullamcorper convallis felis. Pellentesque egestas nunc non nunc luctus eleifend. Nulla varius non mi ac consequat.
						</p>
					</div>
				</div>
			</div>

			<hr className="text-white my-5 mx-3"></hr>

			<div className="row text-white mx-5 mt-2">
				<div className="col-12 d-flex justify-content-between px-5">
					<div className="text-center">
						<p className="fs-3">Birth Year</p>
						<p className="mt-3 fs-4">{store.charactersDetails[params.uid-1].birth_year}</p>
					</div>

					<div className="text-center">
						<p className="fs-3">Height</p>
						<p className="mt-3 fs-4">{store.charactersDetails[params.uid-1].height} cm</p>
					</div>
					
					<div className="text-center">
						<p className="fs-3">Gender</p>
						<p className="mt-3 fs-4">{_.capitalize(store.charactersDetails[params.uid-1].gender)}</p>
					</div>

					<div className="text-center">
						<p className="fs-3">Eye colour</p>
						<p className="mt-3 fs-4">{_.capitalize(store.charactersDetails[params.uid-1].eye_color)}</p>
					</div>

					<div className="text-center">
						<p className="fs-3">Hair colour</p>
						<p className="mt-3 fs-4">{_.capitalize(store.charactersDetails[params.uid-1].hair_color)}</p>
					</div>
				</div>
			</div>        

			<Link to="/">
				<span className="btn btn-primary text-center btn-lg my-5" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Character.propTypes = {
	match: PropTypes.object
};