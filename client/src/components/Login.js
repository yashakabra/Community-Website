import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {logIn, googleSignIn} = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const PORT = 8000;

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      setError("");
      console.log("JUST PRESS SUBMIT");
      console.log(event);
      await logIn(email, password);
      console.log("BEFORE LOGIN USER");
      console.log(email);
      await loginUser(email);
    }catch (err){
      setError(err.message);
      console.log(err);
    }
  }

  const handleGoogleSignIn = async(e) =>{
    e.preventDefault();
    try{
      await googleSignIn();
      await loginUser(email);
    }catch(err){
      console.log(err);
      setError(err.message);
    }
  }
  
  async function loginUser(emai){
    const e = emai;
    console.log("EMAIL IN LOGINUSER");
    console.log(e);
    const response = await fetch(`http://localhost:${PORT}/login`, {
        method:'POST',  
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            e,
        }),
        }
    );
    const {email, flag} = await response.json();
    if(flag == false){

    }else{

    }
  }

  async function updateFlag(emai){
    const response = await fetch(`http://localhost:${PORT}/login`, {
        method:'PUT',  
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            emai,
        }),
        }
    ); 
  }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
}
export default Login;