import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostDetail } from "../../context/PostDetailContext";
import { getPostDetails } from "../../service/postDetailsAPI";
import Card from 'react-bootstrap/Card';
import { useUserAuth } from "../../context/UserAuthContext";
import { useUserDetails } from "../../context/UserDetailsContext";

const defaultValue = {
    Choice: "",
    Title: "",
    Image: "",
    Details: "",
    Tags: [],
}

const OpenedPost = (props) => {
    const {user, token} = useUserAuth();
    const { id } = useParams();
    const [post, setPost] = useState(defaultValue);

    const fetchDetails = async () => {
        const packet = {
            id : id,
            token :token,
        }
        const response = await getPostDetails(packet);
        setPost(response.data[0]);   
    }
    
    useEffect(()=>{
        fetchDetails();
    }, [])

    return (
        <div style={{height: '100vh' }}>
            <Card>
                <Card.Title>{post.Title}</Card.Title>
                <Card.Img variant="bottom" src={post.Image}/>
                <Card.Body>
                    <Card.Text>
                        {post.Details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default OpenedPost;