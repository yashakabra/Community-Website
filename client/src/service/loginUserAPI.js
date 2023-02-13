import axios from "axios";

const URL = "http://localhost:8000";

export const updateFlag = async (data) => {
  try {
    const response = await axios.post(`${URL}/login/updateFlag`, data);
    return response;
  } catch (error) {
    console.log("ERROR IN USING UPDATE FLAG", error);
  }
};

export const createUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/login/createUser`, data);
    return response;
  } catch (error) {
    console.log("ERROR IN CREATING USER ", error);
  }
};

export const getFlag = async (data) => {
  try {
    const response = await axios.post(`${URL}/login/getFlag`, data);
    return response;
  } catch (error) {
    console.log("ERROR IN GETFLAG", error);
  }
};
