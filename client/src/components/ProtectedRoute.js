import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Container, Nav } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { AddUserDetailForm } from "./AddUserDetailForm";
import { EditUserDetailForm } from "./EditUserDetailForm";
import Home from "./Home";
import NavBar from "./NavBar";

const ProtectedRoute = (props) => {
    const { user } = useUserAuth();
    const auth = useUserAuth;

    if (!auth) {
        return <Navigate to="/login" />
    }
    if (props.val == 1)
        return (
            <Container className="w-100 p-0">
                <Row className="w-100 p-0">
                    <NavBar/>
                    <Home className="w-100 p-0" />
                </Row>
            </Container>
        );
    if (props.val == 2)
        return (
          <Container className="w-100">
            <Row className="w-100">
              <NavBar />
              <AddUserDetailForm className="w-100" />
            </Row>
          </Container>
        );
    if (props.val == 3)
        return (
          <Container className="w-100">
            <Row className="w-100">
              <NavBar />
              <EditUserDetailForm className="w-100" />
            </Row>
          </Container>
        );
}

export default ProtectedRoute;
