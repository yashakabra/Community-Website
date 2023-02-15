import React, { useEffect, useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import TypesComponent from "./TypesComponent";
import PostsList from "./PostsList";
import Tags from "./Tags";
import LeftComponent from "../LeftComponent";
import RightComponent from "../RightComponent";
import MiddleComponent from "../MiddleComponent";
import OpenedPost from './OpenedPost';
// import Tags from "./Tags";

const Home = (props) => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const {index} = props;

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };
    // const [left, setLeft] = useState(TypesComponent);
    // const [middle, setMiddle] = useState();
    // const [right, setRight] = useState(Tags);

    return (
        <div className="w-100" style={{ padding: 0 }}>
            <div className="p-4 box mt-3 text-center">
                Hello Welcome <br />
                {user && user.email}
            </div>
            <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogout}>
                    Log out
                </Button>
            </div>
            <Container fluid>
                <Row className="w-100">
                    <Col xs={3} style={{ padding: 0 }}>
                        <LeftComponent Component={TypesComponent}/> 
                    </Col>
                    <Col xs={6} style={{ padding: 0 }}>
                        <MiddleComponent Component={OpenedPost}/>
                    </Col>
                    <Col xs={3} style={{ padding: 0 }}>
                        <RightComponent Component={Tags}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
