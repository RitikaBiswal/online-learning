import React from 'react'
import {Outlet , Navigate} from 'react-router-dom'
const PrivateRoute = () => {
    let isloggedin = true ;
  return isloggedin?<Outlet/>:<Navigate to={"/login"}/>
}

export default PrivateRoute
