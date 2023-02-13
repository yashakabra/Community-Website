import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import RightComponent from "./RightComponent";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./MiddleComponent";
import {Row, Col, Container} from 'react-bootstrap';

const Home = (props) => {

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };
    console.log("HOMEEEE  ", user);
    return (
        <div>
            <div className="p-4 box mt-3 text-center">
                Hello Welcome <br />
                {user && user.email}
            </div>
            <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogout}>
                    Log out
                </Button>
            </div>
            {/* <Container fluid>
                <Row noGutters>
                    <Col xs={3}  style={{padding:0}}>
                        <LeftComponent/>
                    </Col>
                    <Col xs={6} style={{padding:0}}>
                        <MiddleComponent/>
                    </Col>
                    <Col xs={3} style={{padding:0}}>
                        <RightComponent/>
                    </Col>
                </Row>
            </Container> */}
        </div>
    );
}

export default Home;