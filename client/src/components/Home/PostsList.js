import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { getAllPostList } from "../../service/postDetailsAPI";
import PostCard from "./PostCard";

const PostsList = (props) => {
    const {token} = useUserAuth();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if(!token)return ;
        const fetchData = async () => {
            const packet = {
                token:token,
            }
            const response = await getAllPostList(packet);
            setPosts(response.data);
        };
        fetchData();
    }, [token]);

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