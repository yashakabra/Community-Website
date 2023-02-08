import axios from 'axios'

const URL = "http://localhost:8000";

export const addUserDetails = async (data) => {
  try {
    return await axios.post(`${URL}/addUserDetails`, data);
  } catch (error) {
    console.log("Error while calling add user Api", error);
  }
};

export const editUserDetails = async (data,id) => {
  try {
    const appendedData={
        data:data,id:id
    }
    return await axios.post(`${URL}/editUserDetails`,appendedData);
  } catch (error) {
    console.log("Error while calling edit user Api", error);
  }
};

export const getUserDetails = async (data) => {
  try {
    return await axios.post(`${URL}/getUserDetails`,data);
  } catch (error) {
    console.log("Error while calling get user Api", error);
  }
};