import React, { createContext, useContext, useState } from "react";

const postDetailContext = createContext();

export const PostDetailContextProvider = (props) => {

    const [postId, setPostId] = useState("");
    const [openPost, setOpenPost] = useState(false);

    return (
        <postDetailContext.Provider value={{setPostId, setOpenPost, postId, openPost}}>
            {props.children}
        </postDetailContext.Provider>
    );
};

export const usePostDetail = () => {
    return useContext(postDetailContext);
}  