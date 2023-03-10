import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container} from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { AddUserDetailForm } from "./Profile/AddUserDetailForm";
import { EditUserDetailForm } from "./Profile/EditUserDetailForm";
import Home from "../pages/Home";
import NavBar from './NavBar';
import Profile from '../pages/Profile'
const ProtectedRoute = (props) => {
    const auth = useUserAuth();
    const { user } = useUserAuth();
    const { val } = props;

    if (!auth && !user) {
        return <Navigate to="/login" />
    }
    
    let Component;
    if (val === 1) {
        Component = <Home/>;
    } else if (val === 2) {
        Component = <Profile />;
    }
    
    return (
        <Container className="mx-0">
            <Row className="w-100 mx-0" style={{padding:0}}>
                <NavBar />
                {Component}
            </Row>
         </Container>
    );
}

export default ProtectedRoute;
