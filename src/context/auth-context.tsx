

import {createContext, useContext, useState, useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../config/firebase";

// create context
const AuthContext = createContext({});

// provide context
function AuthProvider({ children}  ): JSX.Element {

    //TODO: Implement a local storage function that
    // will be used to check if userLoggedIn on component mount
    // "useLocalStorage"

    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
            if(signedInUser){
                const email = signedInUser.email
                //setUser("email", email)
                setUser(signedInUser)
                
            }else{
                //do something here 
            }
        })

        return unsubscribe;


    }, [])


    console.log(`AuthProvider, user: ${user?.email}`);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

//use context
const useAuth = () => useContext(AuthContext)


export {useAuth, AuthProvider}