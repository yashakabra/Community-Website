import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Container, Nav } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { AddUserDetailForm } from "./AddUserDetailForm";
import { EditUserDetailForm } from "./EditUserDetailForm";
import Home from "./Home/Home";
import OpenedPost from "./Home/OpenedPost";

const ProtectedRoute = (props) => {
    const auth = useUserAuth;
    const { user } = useUserAuth();
    const { val } = props;

    if (!auth && !user) {
        return <Navigate to="/login" />
    }
    
    let Component;
    if (val === 1) {
        Component = (props) => <Home index={0}/>;
    } else if (val === 2) {
        Component = AddUserDetailForm;
    } else if (val === 3) {
        Component = EditUserDetailForm;
    } else if (val === 4) {
        Component = <Home index={1}/>;
    }
    
    return (
        <Container fluid style={{padding:0}}>
            <Row className="w-100" style={{padding:0}}>
                <Component className="w-100" />
            </Row>
        </Container>
    );
}

export default ProtectedRoute;
