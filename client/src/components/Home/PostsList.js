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
            const response = await getAllPostList();
            console.log("INSIDE POSTS LIST  ", response.data[0], response.data[1]);
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