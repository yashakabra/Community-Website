import React from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { usePostDetail } from "../../context/PostDetailContext";

const PostCard = (props) => {
    const navigate = useNavigate();

    const {details} = props;

    const cardSelect = () => {
        navigate(`/home/${details._id}`)
    }

    return (
        <Card className="mt-2">
            <Card.Body style={{cursor:'pointer'}} onClick={cardSelect}>
                <blockquote className="blockquote mb-0">
                    <Card.Text>
                        {details.Title}
                    </Card.Text>                    
                    <footer className="blockquote-footer">
                        @<cite title="Source Title" style={{cursor: 'pointer'}}>{details.UserName}</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default PostCard;