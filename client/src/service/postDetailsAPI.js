import axios from "axios";

const URL = "http://localhost:8000";

export const addPostDetails = async (data) => {
  const token = data.token;
  try {
    return await axios.post(`${URL}/post/addPostDetails`, data.data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });
  } catch (error) {
    console.log("Error while calling add Post Api", error);
  }
};

export const getPostDetails = async (data) => {
  const token = data.token;
  console.log()
  try {
    return await axios.get(`${URL}/post/getPostDetails/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });
  } catch (error) {
    console.log("ERROR IN GETING POST DATA ", error);
  }
}

export const getAllPostList = async (data) => {
  const token = data.token;
  try {
    const response = await axios.get(`${URL}/post/getAllPostList`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });
    return response;
  } catch (error) {
    console.log("ERROR IN GETING ALL POST LIST DATA ", error);
  }
}



export const addPostLikesAndComments = async (packet) => {
  const token = packet.token;
  const data = packet.obj;
  try {
    const response = await axios.post(`${URL}/post/addPostLikesAndComments`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });
    return response;
  }
  catch (error) {
    console.log('ERROR IN ADDING POST LIKES AND COMMENTS', error)
  }
}

export const getPostLikesAndComments = async (packet) => {
  const token = packet.token;
  const id = packet.id;
  try {
    // console.log("inside get like");
    const response = await axios.get(`${URL}/post/getPostLikesAndComments/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
    // console.log(response.data,"looo");
    return response;
  }
  catch (error) {
    console.log('ERROR IN GET POST LIKES AND COMMENTS', error);
  }
}

export const addUserLikedAndCommentedPosts = async (packet) => {
  const token = packet.token;
  const data = packet.data;
  try {
    const response = await axios.post(`${URL}/post/addUserLikedAndCommentedPosts`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });
    return response;
  }
  catch (error) {
    console.log("ERROR IN ADDING USER LIKED AND COMMENTED POSTS", error);
  }
}

export const getUserLikedAndCommentedPosts = async (packet) => {
  const token = packet.token;
  const data = packet.data;
  try {

    const response = await axios.post(`${URL}/post/getUserLikedAndCommentedPosts`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });
    return response;
  }
  catch (error) {
    console.log("ERROR IN GETTING USER LIKED AND COMMENTED POSTS", error);
  }
}

// export const updateTags = async (packet) => {
//   const token = packet.token;
//   const data = packet.data;
//   try {
//     const response = await axios.post(`${URL}/post/updateTags`, data, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token,
//       }
//     });
//     return response;
//   }
//   catch (error) {
//     console.log("ERROR IN GETTING USER LIKED AND COMMENTED POSTS", error);
//   }
// }