import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import TypesComponent from "../components/Home/SideBar";
import PostsList from "../components/Home/PostsList";
import Tags from "../components/Home/Tags";
import LeftComponent from "../components/MajorComponents/LeftComponent";
import RightComponent from "../components/MajorComponents/RightComponent";
import MiddleComponent from "../components/MajorComponents/MiddleComponent";
import OpenedPost from '../components/Home/OpenedPost';
import { PostDetailContextProvider } from "../context/PostDetailContext";
import { useUserDetails } from "../context/UserDetailsContext";
import { CreatePostForm } from "../components/Home/CreatePostForm";

const Home = (props) => {

    console.log("HOMEEE IS CALLED");

    return (
        <Container className="w-100 border">
            <Container fluid>
                <Row className="w-100 my-0">
                    <PostDetailContextProvider>
                        <Col xs={3} style={{ padding: 0, position:'sticky', top:0 }} className="mx-0">
                            <LeftComponent Component={TypesComponent}/> 
                        </Col>
                        <Col xs={6} style={{ padding: 0}} className="mx-0">
                            {<Routes>
                                <Route path="/" element={<MiddleComponent Component={PostsList}/>}/>
                                <Route path="/:id" element={<MiddleComponent Component={OpenedPost}/>}/>
                                <Route path="/post" element={<MiddleComponent Component={CreatePostForm}/>}/>
                            </Routes>}
                        </Col>
                        <Col xs={3} style={{ padding: 0 }} className="mx-0">
                            <RightComponent Component={Tags}/>
                        </Col>
                    </PostDetailContextProvider>
                </Row>
            </Container>
        </Container>
    );
};

export default Home;
