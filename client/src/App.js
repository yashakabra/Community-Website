import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { UserDetailsContextProvider } from "./context/UserDetailsContext";
import Redirect from "./components/MajorComponents/Redirect";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";

function App() {
  return (
    <UserDetailsContextProvider>
      <UserAuthContextProvider>
        <BrowserRouter >
          <NavBar />
          <Container fluid style={{ paddingTop: '70px' }}>
            <Row className="d-flex flex-wrap">
              <Routes>
                <Route path="/" element={<Redirect />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home/*" element={<Home/>} />
                <Route path="/profile/*" element={<Profile />}/>
              </Routes>
            </Row>
          </Container>
        </BrowserRouter> 
      </UserAuthContextProvider>
    </UserDetailsContextProvider>
  );
}

export default App;
