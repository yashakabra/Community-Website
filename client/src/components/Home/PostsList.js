import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { getAllPostList } from "../../service/postDetailsAPI";
import PostCard from "./PostCard";

const PostsList = (props) => {
    const navigate = useNavigate();
    const {token} = useUserAuth();
    
    const [posts, setPosts] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const packet = {
                token:token,
            }
            const response = await getAllPostList(packet);
            setPosts(response.data);
        };
        fetchData();
    }, []);

    return(
        <div >
            {posts && 
                posts.map((post) => {
                    return <PostCard key={post._id} details={post}/>
                })
            }
        </div>
    );
}

export default PostsList;