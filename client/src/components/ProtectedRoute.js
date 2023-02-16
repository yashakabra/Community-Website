import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Container, Navbar } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { AddUserDetailForm } from "./Profile/AddUserDetailForm";
import { EditUserDetailForm } from "./Profile/EditUserDetailForm";
import Home from "../pages/Home";
import NavBar from './NavBar';
import Profile from '../pages/Profile'
const ProtectedRoute = (props) => {
    const auth = useUserAuth;
    const { user } = useUserAuth();
    const { val } = props;

    if (!auth && !user) {
        return <Navigate to="/login" />
    }
    
    let Component;
    if (val === 1) {
        Component = <Home index={0}/>;
    } else if (val === 2) {
        Component = <Profile />;
    } else if (val === 3) {
        Component = <EditUserDetailForm/>;
    } 
    
    return (
        <Container fluid style={{padding:0}}>
            <Row className="w-100" style={{padding:0}}>
                <NavBar/>
                {Component}
            </Row>
        </Container>
    );
}

export default ProtectedRoute;
