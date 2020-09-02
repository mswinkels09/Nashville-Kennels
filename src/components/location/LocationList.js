import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider";

export const LocationList = () => {
    // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("LocationList: Initial render before data")
        getLocations()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("LocationList: Location state changed")
    }, [locations])

    return (
        <div className="locations">
            {
                locations.map(location => {
                    return <section key={location.id} className="location">
                        <div><h3>{location.name}</h3></div>
                        <div>{location.address}</div>
                    </section>    
                })   
            }
        </div>
    )
}