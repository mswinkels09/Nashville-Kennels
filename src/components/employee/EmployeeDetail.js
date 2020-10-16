import React, { useState, useEffect, useContext } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employees.css"


export const EmployeeDetail = (props) => {
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees, removeEmployee } = useContext(EmployeeContext)

    const [employee, setEmployee] = useState({})
    const [location, setLocation] = useState({})

    useEffect(() => {
        getEmployees()
            .then(getLocations)
    }, [])

    useEffect(() => {
        const employee = employees.find(e => e.id === parseInt(props.match.params.employeeId)) || {}
        setEmployee(employee)
    }, [employees])

    useEffect(() => {
        const location = locations.find(l => l.id === employee.location_id) || {}
        setLocation(location)
    }, [locations])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div>Currently working at { location.name }</div>
            <button onClick={
                () => {
                    removeEmployee(employee.id)
                        .then(() => {
                            props.history.push("/employees")
                        })
                }
            }>
                Remove Employee
            </button>
        </section>
    )
}