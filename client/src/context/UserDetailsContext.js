import { createContext, useContext, useEffect, useState } from "react";
import { getUserDetails } from "../service/userDetailsAPI";
const userDetailsContext = createContext();

export function UserDetailsContextProvider({ children }) {

  const [account,setAccount]=useState();

  useEffect(() => {
    const setUserDetails = async (email) => {
      const data = { id: email };
      const response = await getUserDetails(data);
      // setAccount(response.data[0]);
      console.log("runnning appi");
      return response;
    };
    setUserDetails();
    // setAccount(response.data[0]);  
  }, [account])

  const setUserDetails=async (email)=>{
    const data={id:email};
    const response=await getUserDetails(data);
    // setAccount(response.data[0]);
    console.log("runnning appi");
    return response;
  }
  
  return (
    <userDetailsContext.Provider
      value={{ account ,setAccount, setUserDetails }}
    >
      {children}
    </userDetailsContext.Provider>
  );
}

export function useUserDetails() {
  return useContext(userDetailsContext);
}