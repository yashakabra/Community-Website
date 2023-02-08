import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const SignUp = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signUp} = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const PORT = 8000;

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      setError("");
      await signUp(email, password);
      navigate("/login");
    }catch (err){
      setError(err.message);
      console.log(err);
    }
  }

  // async function registerUser(event){
  //   event.preventDefault();
  //   console.log("STARTED");
  //   const response = await fetch(`http://localhost:${PORT}/signup`, {
  //       method:'POST',  
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email, 
  //       }),
  //     }
  //   );
  //   const data = await response.json();
  //   console.log("HELOOOOOOOOOOOO");
  //   console.log(data);
  // }

  return (
    <div>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </div>
  );
}

export default SignUp;