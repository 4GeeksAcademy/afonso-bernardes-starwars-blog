import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/characterCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export const PlanetCard = (props) => {
    const { store, actions } = useContext(Context);

    const handleLike = (event) => {
        event.preventDefault()
        actions.addFavourite(props)
    }

    return (
        <div className="container text-left px-0 me-3 mb-3">
            <div className="card bg-light">
                <img src={props.info.image} className="card-img-top" alt="..."></img>
                
                <div className="card-body d-flex flex-column justify-content-between">
                    <h4 className="card-title mb-3">{props.info.name}</h4>
                    <p className="card-text mb-0 pb-1">Terrain: {props.info.terrain}</p>
                    <p className="card-text mb-0 pb-1">Climate: {props.info.climate}</p>
                    <p className="card-text mb-0 pb-1">Orbital Period: {props.info.orbital_period} days</p>
                    <p className="card-text mb-0 pb-1">Rotation Period: {props.info.rotation_period} hours</p>

                    <div className="container-fluid d-flex justify-content-between px-0">
                        <Link to={"/planet/" + props.info.uid}>
                            <a href="#" className="btn btn-outline-secondary mt-3">Learn more...</a>
                            </Link>
                        <a href="#" className="btn btn-outline-danger mt-3" onClick={handleLike}><FontAwesomeIcon className="my-auto" icon={faHeart} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};