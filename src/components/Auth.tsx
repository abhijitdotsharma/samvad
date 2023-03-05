import {GoogleAuthProvider} from "firebase/auth";
import { auth } from "../config/firebase";

import { handleLogin, handleGoogleLogin, handleSignOut } from '../utils';
import { useInputValues } from '../hooks';

// interface ButtonProps {
//     label: string,
//     handleButtonClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
// }

function AuthButton({ label, handleButtonClick, ...buttonArgs }) {
    return (
        <button onClick={() => handleButtonClick(buttonArgs)}>
            {label}
        </button>
    )
}



function AuthInput({label, value, setOnChange}){

    return(
            <input 
            type="text"
            placeholder={label}
            value={value}
            onChange={(e) => setOnChange(e.target.value)}
            />
    )
}

function Auth() {

    const {email, setEmail, password, setPassword} = useInputValues();
    const googleProvider = new GoogleAuthProvider();


    return (
        <div>
           <AuthInput label="email" value={email} setOnChange={setEmail}/>
           <AuthInput label="pass" value={password} setOnChange={setPassword} />

            <AuthButton
                label="SignUp"
                handleButtonClick={handleLogin}
                auth={auth} email={email} password={password}
            />
            <AuthButton
                label="Google Login"
                handleButtonClick={handleGoogleLogin}
                auth={auth} googleProvider={googleProvider}
            />
            
            <AuthButton 
                label="Logout"
                handleButtonClick={handleSignOut}
                auth={auth}
            />
        </div>
    )
}

export default Auth