import { useEffect, useState } from "react";
import initializeAuthenticationApp from "../Firebase/initializeFirebaseAuth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// create a hook name useFirebase  to share all the info
initializeAuthenticationApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
    });
  }, []);
  return { user, signInWithGoogle, logOut };
};

export default useFirebase;
