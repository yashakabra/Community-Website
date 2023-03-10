import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import TypesComponent from "../components/Home/TypesComponent";
import PostsList from "../components/Home/PostsList";
import Tags from "../components/Home/Tags";
import LeftComponent from "../components/MajorComponents/LeftComponent";
import RightComponent from "../components/MajorComponents/RightComponent";
import MiddleComponent from "../components/MajorComponents/MiddleComponent";
import OpenedPost from "../components/Home/OpenedPost";
import { Tag } from "@mui/icons-material";
import { EditUserDetailForm } from "../components/Profile/EditUserDetailForm";
import { ProfileDetails } from "../components/Profile/ProfileDetails";
import { ProfileLeft } from "../components/Profile/ProfileLeft";
import { ProfileRight } from "../components/Profile/ProfileRight";
const Profile =(props) => {
    const { user } = useUserAuth();
    const navigate = useNavigate();



    return (
      <div className="w-100" style={{ padding: 0 }}>
        <Container fluid style={{ overflow: "auto", height: "650px" }}>
          <Row className="w-100">
            <Col xs={3} style={{ padding: 0,}}>
              <LeftComponent Component={ProfileLeft} />
            </Col>
            <Col xs={6} style={{ padding: 0, }}>
              {
                <Routes>
                  <Route
                    path="/"
                    element={<MiddleComponent Component={ProfileDetails} />}
                  />
                  <Route
                    path="/edit"
                    element={<MiddleComponent Component={EditUserDetailForm} />}
                  />
                </Routes>
              }
            </Col>
            <Col xs={3} style={{ padding: 0,}}>
              <RightComponent Component={ProfileRight} />
            </Col>
          </Row>
        </Container>
      </div>
    );
            };

export default Profile;
