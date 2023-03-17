import { Button, ToggleButton, FloatingLabel, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../service/postDetailsAPI";
import { addPostLikesAndComments } from "../../service/postDetailsAPI";
import { getPostLikesAndComments } from "../../service/postDetailsAPI";
import { addUserLikedAndCommentedPosts } from "../../service/postDetailsAPI";
import { getUserLikedAndCommentedPosts } from "../../service/postDetailsAPI";
import { useUserAuth } from "../../context/UserAuthContext";
import CommentCard from "./CommentCard"
import Card from 'react-bootstrap/Card';


const defaultValue = {
  Choice: "",
  Title: "",
  Image: "",
  Details: "",
  Tags: [],
}

const OpenedPost = (props) => {

  const { token, user } = useUserAuth();
  const { id } = useParams();
  const [post, setPost] = useState(defaultValue);
  const [likes, setLikes] = useState(0);
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(0);

  console.log(message);

  const fetchDetails = async () => {
    const packet = {
      id: id,
      token: token,
    }
    const response = await getPostDetails(packet);
    setPost(response.data[0]);
  }

  const getLikesAndCommentsOfPost = async () => {
    const packet = {
      id: id,
      token: token,
    }
    const response = await getPostLikesAndComments(packet);
    if(response.data[0].likes !== undefined)
    setLikes(response.data[0].likes);
    if(response.data[0].comments !== undefined)
    setComments(response.data[0].comments);
  };

  const getIsLikedFlag = async (data) => {
    const packet = {
      data: data,
      token: token,
    }
    const response = await getUserLikedAndCommentedPosts(packet);
    setIsLiked(response.data.isLiked);
  };

  const setLike = async () => {
    let obj = { id: id, likes: 0, message: "", statusCode: 0, email: user.email };
    if (isLiked) {
      obj.statusCode = 0;
      obj.likes = -1;
    }
    else {
      obj.statusCode = 1;
      obj.likes = 1;
    }
    let data = { id: id, statusCode: obj.statusCode, email: user.email, message: "" };
    const packet1 = {
      obj: obj,
      token: token,
    }
    await addPostLikesAndComments(packet1);
    const packet2 = {
      data: data,
      token: token,
    }
    await addUserLikedAndCommentedPosts(packet2);
    await getLikesAndCommentsOfPost();
    const obj2 = { email: user.email, postId: id };
    await getIsLikedFlag(obj2);
  }

  const handleMessageChange = async (e) => {
    setMessage(e.target.value);
  }

  const handleMessageSubmit = async () => {
    let obj = {
      id: id,
      likes: 0,
      message: message,
      statusCode: 2,
      email: user.email,
    };

    let data = {
      id: id,
      statusCode: obj.statusCode,
      email: user.email,
      message: message,
    };
    const packet1 = {
      obj: obj,
      token: token,
    };
    const packet2 = {
      data: data,
      token: token,
    };
    await addPostLikesAndComments(packet1);
    await addUserLikedAndCommentedPosts(packet2);
    await getLikesAndCommentsOfPost();
  }
  useEffect(() => {
    if (Object.keys(user).length === 0)
      return;
    fetchDetails();
    getLikesAndCommentsOfPost();
    const obj = { email: user.email, postId: id };
    getIsLikedFlag(obj);
  }, [user]);

  return (
    <div style={{ height: "100vh" }}>
      <Card>
        <Card.Title>{post.Title}</Card.Title>
        <Card.Img
          variant="bottom"
          src={post.photo}
          style={{ width: "300px", height: "300px" }}
        />
        <Card.Body>
          <Card.Text>{post.Details}</Card.Text>
        </Card.Body>
        <div>
          <ToggleButton
            className="mb-2 ml-8"
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            checked={isLiked}
            value="1"
            onChange={setLike}
          >
            Like
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: "-8px" }}
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-hand-thumbs-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>
            </span>
            <span>{likes}</span>
          </ToggleButton>
        </div>
        {comments.map((comment) => (
          <CommentCard key={comment._id} details={comment}>
          </CommentCard>
        ))}

        <FloatingLabel controlId="floatingTextarea2" label="Type Your Comment">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            value={message}
            onChange={handleMessageChange}
            style={{ height: "50px" }}
          />
        </FloatingLabel>
        <Button variant="outline-primary" onClick={handleMessageSubmit}>
          Submit Your Comment
        </Button>
      </Card>
    </div>
  );
}

export default OpenedPost;