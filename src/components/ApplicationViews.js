import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail";
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalDetails } from "./animal/AnimalDetail";
import { AnimalSearch } from "./animal/AnimalSearch";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeDetail } from "./employee/EmployeeDetail";

export const ApplicationViews = (props) => {
    return (
        <>
            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("kennel_customer")
                    props.history.push("/login")
                }
            } />

            <LocationProvider>
                <AnimalProvider>
                    <EmployeeProvider>
                        <Route exact path="/">
                            <LocationList />
                        </Route>
                        <Route path="/locations/:locationId(\d+)" render={
                            props => <LocationDetail {...props} />
                        } />
                    </EmployeeProvider>
                </AnimalProvider>
                {/* Render the location list when http://localhost:3000/ */}
            </LocationProvider>

            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>
                        <Route exact path="/animals" render ={
                            props => <>
                            <AnimalSearch />
                            <AnimalList {...props} />
                            </>
                        }>
                            
                        </Route>
                        <Route path="/animals/create" render={
                            props => <AnimalForm {...props}/>
                        } />
                        <Route path="/animals/:animalId(\d+)" render={
                            props => <AnimalDetails {...props} />
                        } />   
                    </LocationProvider>
                </CustomerProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <AnimalProvider>
                        {/* Render the animal list when http://localhost:3000/employees */}
                        <Route exact path="/employees" render={
                            props => <EmployeeList {...props} />
                        } />
                        <Route path="/employees/create" render={
                            props => <EmployeeForm {...props}/>
                        } />
                        <Route path="/employees/:employeeId(\d+)" render={
                            props => <EmployeeDetail {...props} />
                        } />
                    </AnimalProvider>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}