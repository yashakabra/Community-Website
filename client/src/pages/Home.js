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
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const {account}=useUserDetails();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleProfile = () => {
        navigate('/profile')
    }

    return (
        <Container className="w-100 border">
            {/* <div className="p-4 box mt-3 text-center">
                Hello Welcome <br />
                {user && user.email}
            </div>
            <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogout}>
                    Log out
                </Button>
            </div>
            <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleProfile}>
                    Profile
                </Button>
            </div> */}
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
