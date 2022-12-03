import React from "react";

const Card = () => {
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow shadow-5">
            <img alt="CardProfile" src="https://robohash.org/test"/>
            <div>
                <h2>Name</h2>
                <p>email</p>
            </div>
        </div>
    );
}

export default Card;