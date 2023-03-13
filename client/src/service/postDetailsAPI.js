import axios from "axios";

const URL = "http://localhost:8000";

export const addPostDetails = async (data) => {
  const token = data.token;
  try {
    return await axios.post(`${URL}/post/addPostDetails`,  data.data, {headers: {
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token,
    }});
  } catch (error) {
    console.log("Error while calling add Post Api", error);
  }
};

export const getPostDetails = async (data) => {
  const token = data.token;
  try{
    return await axios.get(`${URL}/post/getPostDetails/${data.id}`, {headers: {
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token,
    }});
  }catch (error){
    console.log("ERROR IN GETING POST DATA ", error);
  }
}

export const getAllPostList = async (data) => {
  const token = data.token;
  try{
    const response = await axios.get(`${URL}/post/getAllPostList`, {headers: {
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token,
    }});
    return response;
  }catch(error){
    console.log("ERROR IN GETING ALL POST LIST DATA ", error);
  }
}
