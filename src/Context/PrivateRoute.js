import React from "react";
import {useContext} from 'react'
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
const PrivateRoute=({children})=>{
    const {auth}=useContext(AuthContext)

    if(auth.token){
        return children
    }
    return <Navigate to="/login" />

}
export default PrivateRoute