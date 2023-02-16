import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllPostList } from "../../service/postDetailsAPI";
import PostCard from "./PostCard";

const PostsList = (props) => {
    const navigate = useNavigate();

    const sumbit = () => {
        navigate("/home/spost"); 
    }

    const [posts, setPosts] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPostList();
            setPosts(data);
        };
        fetchData();
    }, []);

    return(
        <div style={{backgroundColor: 'red', height: '100vh'}}>
            <Button onClick={sumbit}>Open post</Button>
            {posts && 
                posts.map((post) => {
                    <PostCard details={post}/>
                })
            }
        </div>
    );
}

export default PostsList;