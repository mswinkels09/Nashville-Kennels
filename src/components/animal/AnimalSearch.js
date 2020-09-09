import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animals.css"

export const AnimalSearch = () => {
    const { setTerms } = useContext(AnimalContext)

    return (
        <>
            <div>Animal search:</div>
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setTerms(keyEvent.target.value)
                }
                placeholder="Search for an animal... " />
        </>
    )
}