import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {

    return (
        <Route>
            {...rest}
            render={(props) => {
                if(localStorage.getItem("token")){
                    return <Component {...rest} />
                } else {
                    return <Redirect to='/login' />
                }
            }}
        </Route>
    )
}

export default PrivateRoute

//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in