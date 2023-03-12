import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext({});

function AuthProvider({ children }): JSX.Element {
  // TODO: useLocalStorage

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        const { email } = signedInUser;
        // setUser("email", email)
        setUser(signedInUser);
      } else {
        // do something here
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(`AuthProvider, user: ${user?.email}`);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        googleProvider,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// const useAuth = () => useContext(AuthContext)
const useAuth = (): {
  user?: any;
  setUser?: any;
  email?: string;
  setEmail?: () => void;
  password?: string;
  setPassword?: () => void;
  googleProvider?: GoogleAuthProvider;
} => {
  const {
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    googleProvider,
  } = useContext(AuthContext);

  return {
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    googleProvider,
  };
};

export { useAuth, AuthProvider };
