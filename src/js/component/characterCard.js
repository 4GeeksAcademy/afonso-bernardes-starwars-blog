import React from "react";
import characterCard from "../../styles/characterCard.css"

export const CharacterCard = (props) => (
    <div className="container text-left w-100 h-100 ps-0 me-3 mb-2">
        <div className="card bg-light">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h4 className="card-title mb-3">{props.characterInfo.name}</h4>
                <p className="card-text mb-0 pb-1">Gender: {props.characterInfo.gender}</p>
                <p className="card-text mb-0 pb-1">Birth Year: {props.characterInfo.birth_year}</p>
                <p className="card-text mb-0 pb-1">Height: {props.characterInfo.height}</p>
                <a href="#" className="btn btn-outline-secondary mt-3">Learn more...</a>
            </div>
        </div>
    </div>
);