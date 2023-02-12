import axios from 'axios'

const URL = "http://localhost:8000";

export const addUserDetails = async (data) => {
  try {
    return await axios.post(`${URL}/profile/addUserDetails`, data);
  } catch (error) {
    console.log("Error while calling add user Api", error);
  }
};

export const editUserDetails = async (data, id) => {
  try {
    const appendedData = {
      data: data,
      id: id,
    };
    return await axios.post(`${URL}/profile/editUserDetails`, appendedData);
  } catch (error) {
    console.log("Error while calling edit user Api", error);
  }
};

export const getUserDetails = async (data) => {
  try {
    return await axios.post(`${URL}/profile/getUserDetails`, data);
  } catch (error) {
    console.log("Error while calling get user Api", error);
  }
};

export const addPostDetails = async (data) => {
  try {
    return await axios.post(`${URL}/addPostDetails`, data);
  } catch (error) {
    console.log("Error while calling add Post Api", error);
  }
};
