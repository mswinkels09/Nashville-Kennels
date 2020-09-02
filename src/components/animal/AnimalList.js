import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider";

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the Animal state changed.
    */
    useEffect(() => {
        console.log("AnimalList: Animal state changed")
    }, [animals])

    return (
        <div className="animals">
            {
                animals.map(animal => {
                    return <section key={animal.id} className="animal">
                        <div><h3>{animal.name}</h3></div>
                        <div>{animal.breed}</div>
                    </section>    
                })   
            }
        </div>
    )
}