import {useState} from "react";


function useInputValues(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Complex calculations here, for future

    return{
        email,
        setEmail,
        password,
        setPassword
    }
}


export default useInputValues;