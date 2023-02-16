import { createContext, useContext, useEffect, useState } from "react";
import { getUserDetails } from "../service/userDetailsAPI";

const userDetailsContext = createContext();

export function UserDetailsContextProvider({ children }) {

  const [account,setAccount]=useState(()=>{
    const storedAccount = localStorage.getItem('account');
    return storedAccount ? JSON.parse(storedAccount) : null;
  });

  const setUserDetails=async (email)=>{
    const data={id:email};
    const response=await getUserDetails(data);
    console.log("runnning appi");
    return response;
  }

  useEffect(()=>{
    localStorage.setItem('account', JSON.stringify(account));
  }, [account]);
  
  return (
    <userDetailsContext.Provider
      value={{ account ,setAccount, setUserDetails }}>
      {children}
    </userDetailsContext.Provider>
  );
}

export function useUserDetails() {
  return useContext(userDetailsContext);
}