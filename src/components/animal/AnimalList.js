import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider";
import { Animal } from "./Animal";
import { CustomerContext } from "../customer/CustomerProvider";
import { LocationContext } from "../location/LocationProvider";

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    const {customers, getCustomers} = useContext(CustomerContext)
    const {locations, getLocations} = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
        getCustomers()
        getLocations()
    }, [])

    return (
        <div className="animals">
            {
                 animals.map(animal => {
                    const owner = customers.find(customer => customer.id === animal.customerId) || {}
                    const location = locations.find(location => location.id === animal.locationId) || {}
                    return <Animal key={animal.id} animal={animal} owner={owner} location={location} />
                })
            }
        </div>
    )
}