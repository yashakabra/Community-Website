import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { getFlag } from "../service/loginUserAPI";
import { useUserDetails } from "../context/UserDetailsContext";


const Login = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleSignIn, token} = useUserAuth();
  const {setUserDetails,setAccount}=useUserDetails();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const currentUser = {
    email: email,
    flag: true,
  };
  const packet = {
    data : currentUser,
    token:token,
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError("");
      await logIn(email, password);
      
      const obj = await getFlag(packet);
      const flag = obj.data[0].flag;

      if (flag == false) {
        navigate("/profile/create");
      } else {
        const pack = {
          data:{
            id : email,
          },
          token:token,
        }
        const response = await setUserDetails(pack);
        await setAccount(response.data[0]);
        navigate("/home");
      }
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      const obj = await getFlag(packet);
      const flag = obj.data[0].flag;
      if (flag == false) {
        navigate("/profile/create");
      } else {
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
};
export default Login;