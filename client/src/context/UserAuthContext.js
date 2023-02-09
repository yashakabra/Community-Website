import {createContext, useContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut, 
        onAuthStateChanged,
        GoogleAuthProvider,
        signInWithPopup,    
    } from "firebase/auth"
import {auth} from '../components/config/firebase'

const userAuthContext = createContext();


export function UserAuthContextProvider ({children}) {
    const [user, setUser] = useState("");
    
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut(){
        return signOut(auth);
    }

    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("INSIDE unsubscibe");
            console.log(currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    }, [])

    function isSignedIn(){
        onAuthStateChanged(auth, (user) => {
            console.log("INSIDE ISSIGNED IN");
            console.log(user);
            if(user){
                setUser(user);
                return true;
            }else{
                setUser("");
                return false;
            }
        })
    }

    return (
        <userAuthContext.Provider value={{user, isSignedIn, signUp, logIn, logOut, googleSignIn}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext);
}