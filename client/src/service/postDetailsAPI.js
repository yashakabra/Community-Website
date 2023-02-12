import axios from "axios"

const URL = "http://localhost:8000";

export const addPostDetails = async (data) => {
  try {
    return await axios.post(`${URL}/post/addPostDetails`, data);
  } catch (error) {
    console.log("Error while calling add Post Api", error);
  }
};
