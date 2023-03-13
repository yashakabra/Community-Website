import { createContext, useContext, useEffect, useState } from "react";
import { getUserDetails } from "../service/userDetailsAPI";
const userDetailsContext = createContext();

export function UserDetailsContextProvider({ children }) {

    const [account, setAccount] = useState(() => {
        const storedAccount = localStorage.getItem('account');
        if(storedAccount !== undefined)return JSON.parse(storedAccount)
        return "";
    });

    const setUserDetails = async (packet) => {
        const response = await getUserDetails(packet);
        return response;
    }

    const handleLogOut = async () => {
        localStorage.removeItem('account');
        setAccount(null);
    }

    useEffect(() => {
        localStorage.setItem('account', JSON.stringify(account));
    }, [account]);

    return (
        <userDetailsContext.Provider
            value={{ account, setAccount, setUserDetails, handleLogOut }}>
            {children}
        </userDetailsContext.Provider>
    );
}

export function useUserDetails() {
    return useContext(userDetailsContext);
}