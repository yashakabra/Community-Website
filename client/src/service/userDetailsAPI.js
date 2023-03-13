import axios from "axios";

const URL = "http://localhost:8000";

export const addUserDetails = async (data) => {
  const token = data.token;
  try {
    return await axios.post(`${URL}/profile/addUserDetails`, data.data, {headers: {
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token,
    }});
  } catch (error) {
    console.log("Error while calling add user Api", error);
  }
};

export const editUserDetails = async (data) => {
  const token = data.token;
  try {
    return await axios.post(`${URL}/profile/editUserDetails`, data.data, {headers: {
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token,
    }});
  } catch (error) {
    console.log("Error while calling edit user Api", error);
  }
};

export const getUserDetails = async (data) => {
  const token = data.token;
  try {
    return await axios.post(`${URL}/profile/getUserDetails`, data.data, {headers: {
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token,
    }});
  } catch (error) {
    console.log("Error while calling get user Api", error);
  }
};

export const addPostDetails = async (data) => {
  const token = data.token;
  try {
    return await axios.post(`${URL}/addPostDetails`, data.data, {headers: {
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token,
    }});
  } catch (error) {
    console.log("Error while calling add Post Api", error);
  }
};
