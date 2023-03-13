import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import LeftComponent from "../components/MajorComponents/LeftComponent";
import RightComponent from "../components/MajorComponents/RightComponent";
import MiddleComponent from "../components/MajorComponents/MiddleComponent";
import { EditUserDetailForm } from "../components/Profile/EditUserDetailForm";
import { ProfileDetails } from "../components/Profile/ProfileDetails";
import { ProfileLeft } from "../components/Profile/ProfileLeft";
import { ProfileRight } from "../components/Profile/ProfileRight";
const Profile =(props) => {
    
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
