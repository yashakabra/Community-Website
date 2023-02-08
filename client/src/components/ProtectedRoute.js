import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Home from "./Home";

const ProtectedRoute = (props) => {
    const {user, isSignedIn} = useUserAuth();
    const auth = useUserAuth;
    async function check (){
        const val = await isSignedIn();
        console.log("INSIDE PROC ROUTE");
        console.log(user);
        if(!auth){
            return <Navigate to="/login"/>
        }
        if(props.val == 1)
        return <Home/>;
    }
    // check();
    console.log("INSIDE PROC ROUTE");
    console.log(user);
    if(!auth){
        return <Navigate to="/login"/>
    }
    if(props.val == 1)
    return <Home/>;
}

export default ProtectedRoute;