import React from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { usePostDetail } from "../../context/PostDetailContext";

const PostCard = (props) => {
    const navigate = useNavigate();

    const {postId, openPost, setOpenPost, setPostId} = usePostDetail();
    const {details} = props;

    const cardSelect = () => {
        setPostId(details._id);
        setOpenPost(true);
        navigate('/home/spost');
    }

    const profileSelect = () => {
        // setProfileId(details.email);
        // setProfile(true);
    }

    return (
        <Card>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <Card.Text onClick={cardSelect} style={{cursor: 'pointer'}}>
                        {details.Title}
                    </Card.Text>                    
                    <footer className="blockquote-footer">
                        @ <cite title="Source Title" onClick={profileSelect} style={{cursor: 'pointer'}}>{details.UserName}</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default PostCard;