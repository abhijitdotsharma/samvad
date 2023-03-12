import { auth } from '../../config/firebase';
import { useAuth } from '../../context/auth-context';

import { handleLogin, handleGoogleLogin, handleSignOut } from '../../utils';

import AuthButton from './AuthButton';
import AuthInput from './AuthInput';

function Auth() {
  const { email, setEmail, password, setPassword, googleProvider } = useAuth();

  return (
    <div>
      <AuthInput label="email" value={email} setOnChange={setEmail} />
      <AuthInput label="pass" value={password} setOnChange={setPassword} />

      <AuthButton
        label="SignUp"
        handleButtonClick={handleLogin}
        auth={auth}
        email={email}
        password={password}
      />
      <AuthButton
        label="Google Login"
        handleButtonClick={handleGoogleLogin}
        auth={auth}
        googleProvider={googleProvider}
      />

      <AuthButton
        label="Logout"
        handleButtonClick={handleSignOut}
        auth={auth}
      />
    </div>
  );
}

export default Auth;
