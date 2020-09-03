import React from "react"
import "./Animals.css"

export const Animal = ({animal, owner, location}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="owner">Owner: {owner.name}</div>
        <div className="facility">Location: {location.name}</div>
    </section>
)