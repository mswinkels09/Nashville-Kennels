import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider";
import { Customer } from "./Customer";

export const CustomerList = () => {
    // This state changes when `getAustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("CustomerList: Initial render before data")
        getCustomers()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the Austomer state changed.
    */
    useEffect(() => {
        console.log("CustomerList: Austomer state changed")
    }, [customers])

    return (
        <div className="customers">
            {
                customers.map(c => <Customer key={c.id} customer={c} />)    
            }
        </div>
    )
}