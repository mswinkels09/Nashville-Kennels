import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeList = () => {
    // This state changes when `getAmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees()
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
            {
                employees.map(employee => {
                    return <section key={employee.id} className="employee">
                        <div><h3>{employee.name}</h3></div>
                        <div>{employee.location}</div>
                    </section>    
                })   
            }
        </div>
    )
}