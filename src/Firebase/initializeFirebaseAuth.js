import { initializeApp } from "firebase/app";

import firebaseConfig from "./firebase.config";

const initializeAuthenticationApp = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthenticationApp;
