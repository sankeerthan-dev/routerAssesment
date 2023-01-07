import React from "react";
import {useContext} from 'react'
import { connect } from "react-redux";
// import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
const PrivateRoute=({children})=>{
    // const {auth}=useContext(AuthContext)

    if(auth.token){
        return children
    }
    return <Navigate to="/login" />

}

const mapStateToProps = (state) => {
    console.log(state)
}
export default connect(mapStateToProps)( PrivateRoute)
// export connect