import { Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

const OpenedPost = (props) => {
    const navigate = useNavigate();
    const back = () => {
        navigate("/home")
    }

    return(
        <div style={{backgroundColor: 'green', height: '100vh'}}>
            OPENED POSTS
            <Button onClick={back}>Back</Button>
        </div>
    );
}

export default OpenedPost;