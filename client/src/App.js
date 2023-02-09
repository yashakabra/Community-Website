import React from "react";
// import SignUp from "../components/SIgnUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddUserDetailForm } from "./components/AddUserDetailForm";
import { EditUserDetailForm } from "./components/EditUserDetailForm";
import {Row, Col, Container} from "react-bootstrap";
// import {Routes, Route, BrowserRouter} from "react-router-dom";
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
                <Route
                  path="/home"
                  element={<ProtectedRoute val={1} />}
                ></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/profile/firstuser" element={<Home />}></Route>
                <Route path="/profile/create" element={<AddUserDetailForm />} />
                <Route path="/profile/edit" element={<EditUserDetailForm />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
