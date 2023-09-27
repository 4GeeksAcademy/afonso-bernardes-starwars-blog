import React from "react";
//import characterCard from "../../styles/characterCard.css"

export const CharacterCard = (props) => (
    <div className="container text-left w-100 ps-0 me-3">
        <div className="card bg-light">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title mb-3">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-outline-secondary">Learn more...</a>
            </div>
        </div>
    </div>
);