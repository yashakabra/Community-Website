import axios from "axios";

const URL = "http://localhost:8000";

export const addPostDetails = async (data) => {
  try {
    return await axios.post(`${URL}/post/addPostDetails`, data);
  } catch (error) {
    console.log("Error while calling add Post Api", error);
  }
};

export const getPostDetails = async (data) => {
  try{
    return await axios.post(`${URL}/post/getPostDetails`, data);
  }catch (error){
    console.log("ERROR IN GETING POST DATA ", error);
  }
}

export const getAllPostList = async () => {
  try{
    return await axios.post(`${URL}/post/getAllPostList`).data;
  }catch(error){
    console.log("ERROR IN GETING ALL POST LIST DATA ", error);
  }
}
