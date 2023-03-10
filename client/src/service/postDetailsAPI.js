import axios from "axios";

const URL = "http://localhost:8000";

export const addPostDetails = async (data) => {
  try {
    return await axios.post(`${URL}/post/addPostDetails`, data);
  } catch (error) {
    console.log("Error while calling add Post Api", error);
  }
};

export const getPostDetails = async (id) => {
  try{
    return await axios.get(`${URL}/post/getPostDetails/${id}`);
  }catch (error){
    console.log("ERROR IN GETING POST DATA ", error);
  }
}

export const getAllPostList = async () => {
  try{
    const response = await axios.get(`${URL}/post/getAllPostList`);
    return response;
  }catch(error){
    console.log("ERROR IN GETING ALL POST LIST DATA ", error);
  }
}
