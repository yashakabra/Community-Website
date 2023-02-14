import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostsList = (props) => {
    const navigate = useNavigate();
    const sumbit = () => {
        navigate("/home/spost"); 
    }

    return(
        <div style={{backgroundColor: 'red', height: '100vh'}}>
            <Button onClick={sumbit}>Open post</Button>
        </div>
    );
}

export default PostsList;