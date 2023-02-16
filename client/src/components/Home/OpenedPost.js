import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostDetail } from "../../context/PostDetailContext";
import { getPostDetails } from "../../service/postDetailsAPI";
import Card from 'react-bootstrap/Card';

const defaultValue = {

}

const OpenedPost = (props) => {

    const { postId, openPost, setOpenPost, setPostId } = usePostDetail();
    const [details, setDetails] = useState(defaultValue);
    const navigate = useNavigate();

    const back = () => {
        navigate("/home")
    }

    useEffect(() => {
        if (!postId) {
            return;
        }
        fetchData(postId);
    }, [postId])

    const fetchData = async (postId) => {
        const obj = {
            _id: postId,
        }
        const response = await getPostDetails(obj);
        setDetails(response.data[0]);
    }

    return (
        <div style={{ backgroundColor: 'green', height: '100vh' }}>
            <Button onClick={back}>Back</Button>
            <Card>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="holder.js/100px180" />
            </Card>
        </div>
    );
}

export default OpenedPost;