import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostDetail } from "../../context/PostDetailContext";
import { getPostDetails } from "../../service/postDetailsAPI";
import Card from 'react-bootstrap/Card';

const defaultValue = {
    Choice: "",
    Title: "",
    Image: "",
    Details: "",
    Tags: [],
}

const OpenedPost = (props) => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(defaultValue);

    const fetchDetails = async () => {
        const response = await getPostDetails(id);
        setPost(response.data[0]);   
    }

    fetchDetails();

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