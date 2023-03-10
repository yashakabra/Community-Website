import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserDetailsContextProvider } from "./context/UserDetailsContext";
import Redirect from "./components/MajorComponents/Redirect";

function App() {
  return (
    <UserDetailsContextProvider>
      <UserAuthContextProvider>
        <BrowserRouter >
          <Container fluid className="mx-0 border" style={{paddingTop:'70px'}}>
            <Row className="w-100 mx-0">
                <Routes>
                  <Route path="/" element={<Redirect/>}/>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route
                    path="/home/*"
                    element={<ProtectedRoute val={1} />}
                  ></Route>
                  <Route
                    path="/profile/*"
                    element={<ProtectedRoute val={2} />}
                  ></Route>
                </Routes>
            </Row>
          </Container>
        </BrowserRouter>
      </UserAuthContextProvider>
    </UserDetailsContextProvider>
  );
}

export default App;
