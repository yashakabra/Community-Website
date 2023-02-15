import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Container fluid style={{padding:0, margin:0}}>
        <Row className="w-100" style={{padding:0, margin:0}}>
          <Col md={12}>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                  path="/home/*"
                  element={<ProtectedRoute val={1}/>}
                ></Route>
                <Route
                  path="/profile/create"
                  element={<ProtectedRoute val={2} />}
                />
                <Route
                  path="/profile/edit"
                  element={<ProtectedRoute val={3} />}
                />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
