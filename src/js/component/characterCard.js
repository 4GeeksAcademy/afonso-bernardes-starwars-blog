import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/characterCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export const CharacterCard = (props) => {
    const { store, actions } = useContext(Context);

    const handleLike = (event) => {
        event.preventDefault()
        actions.addFavourite(props)
    }

    return (
        <div className="container text-left px-0 me-3 mb-3">
            <div className="card bg-light">
                <img src={props.characterInfo.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title mb-3">{props.characterInfo.name}</h4>
                    <p className="card-text mb-0 pb-1">Gender: {_.capitalize(props.characterInfo.gender)}</p>
                    <p className="card-text mb-0 pb-1">Birth Year: {props.characterInfo.birth_year}</p>
                    <p className="card-text mb-0 pb-1">Height: {props.characterInfo.height}</p>

                    <div className="container-fluid d-flex justify-content-between px-0">
                        <a href="#" className="btn btn-outline-secondary mt-3">Learn more...</a>
                        <a href="#" className="btn btn-outline-danger mt-3" onClick={handleLike}><FontAwesomeIcon className="my-auto" icon={faHeart} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};