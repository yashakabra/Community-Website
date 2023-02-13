import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {

  return (
    <div >
      <NavBar/>
      <BrowserRouter>
        <Container className="d-flex border p-0">
          <Row  className="flex-fill border p-0">
            <Col className="w-100 border p-0">
              <UserAuthContextProvider>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/home" element={<ProtectedRoute val={1} />}></Route>
                  <Route path="/profile/create" element={<ProtectedRoute val={2} />} />
                  <Route path="/profile/edit" element={<ProtectedRoute val={3} />} />
                </Routes>
              </UserAuthContextProvider>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>

  );
}

export default App;
