import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import { LocationContext } from "../location/LocationProvider";

export const EmployeeList = (props) => {
    // This state changes when `getAmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees()
        getLocations()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the Amployee state changed.
    */
    useEffect(() => {
        console.log("EmployeeList: Amployee state changed")
    }, [employees])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            {
                employees.map(employee => {
                    const location = locations.find(location => location.id === employee.locationId) || {}
                    return <Employee key={employee.id} employee={employee} location={location} />
                })
            }
        </div>
    )
}