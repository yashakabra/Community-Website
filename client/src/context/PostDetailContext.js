import React, { createContext, useContext, useEffect, useState } from "react";

const postDetailContext = createContext();

export const PostDetailContextProvider = (props) => {

    const [postId, setPostId] = useState(()=>{
        const storedPostId = localStorage.getItem("postId");
        return storedPostId ? JSON.parse(storedPostId) : null;
    });
    const [openPost, setOpenPost] = useState(()=>{
        const storedOpenPost = localStorage.getItem("openPost");
        return storedOpenPost ? JSON.parse(storedOpenPost) : null;
    });

    useEffect(() => {
        localStorage.setItem('postId', JSON.stringify(postId));
        localStorage.setItem('openPost', JSON.stringify(openPost));
    }, [postId, openPost]);

    return (
        <postDetailContext.Provider value={{setPostId, setOpenPost, postId, openPost}}>
            {props.children}
        </postDetailContext.Provider>
    );
};

export const usePostDetail = () => {
    return useContext(postDetailContext);
}  