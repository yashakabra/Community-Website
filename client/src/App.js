import React from "react";
// import SignUp from "../components/SIgnUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddUserDetailForm } from "./components/AddUserDetailForm";
import { EditUserDetailForm } from "./components/EditUserDetailForm";
import {CreatePostForm} from "./components/CreatePostForm"
import { Row, Col, Container } from "react-bootstrap";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                  path="/home"
                  element={<ProtectedRoute val={1} />}
                ></Route>
                <Route
                  path="/profile/create"
                  element={<ProtectedRoute val={2} />}
                />
                <Route
                  path="/profile/edit"
                  element={<ProtectedRoute val={3} />}
                />
                <Route path="/home/post" element={<CreatePostForm />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
