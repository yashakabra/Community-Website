import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import TypesComponent from "../components/Home/SideBar";
import PostsList from "../components/Home/PostsList";
import Tags from "../components/Home/Tags";
import LeftComponent from "../components/MajorComponents/LeftComponent";
import RightComponent from "../components/MajorComponents/RightComponent";
import MiddleComponent from "../components/MajorComponents/MiddleComponent";
import OpenedPost from '../components/Home/OpenedPost';
import { CreatePostForm } from "../components/Home/CreatePostForm";

const Home = (props) => {
    console.log("HOME ");
    return (
            <Container fluid>
                <Row >
                    <Col md={3}>
                        <LeftComponent Component={TypesComponent} />
                    </Col>
                    <Col md={6}>
                        {<Routes>
                            <Route path="/" element={<MiddleComponent Component={PostsList} />} />
                            <Route path="/:id" element={<MiddleComponent Component={OpenedPost} />} />
                            <Route path="/post" element={<MiddleComponent Component={CreatePostForm} />} />
                        </Routes>}
                    </Col>
                    <Col md={3}>
                        <RightComponent Component={Tags} />
                    </Col>
                </Row>
            </Container>
    );
};

export default Home;
