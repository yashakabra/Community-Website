import { Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../context/UserDetailsContext";
const OpenedPost = (props) => {
    const navigate = useNavigate();
    const back = () => {
        navigate("/home")
    }
    const {account} =useUserDetails();
    console.log('inside open',account);
    return(
        <div style={{backgroundColor: 'green', height: '100vh'}}>
            OPENED POSTS
            <Button onClick={back}>Back</Button>
        </div>
    );
}

export default OpenedPost;