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

const Home = React.memo((props) => {
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

    const {index} = props;
    let leftC, rightC, middleC;
    if(index === 0){
        leftC = TypesComponent;
        rightC= Tags;
        middleC = PostsList;
    }else if(index === 1){
        leftC = React.memo(TypesComponent);
        rightC= React.memo(Tags);
        middleC = React.memo(OpenedPost);
    }

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
                        <LeftComponent Component={leftC}/> 
                    </Col>
                    <Col xs={6} style={{ padding: 0 }}>
                        <MiddleComponent Component={middleC}/>
                    </Col>
                    <Col xs={3} style={{ padding: 0 }}>
                        <RightComponent Component={rightC}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}, (prevprops, nextprops) => prevprops.index === nextprops.index);

export default Home;
