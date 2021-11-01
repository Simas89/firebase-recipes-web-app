import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsyeTlfYUtGkZPJJANkR03UVqdbPRLY48",
  authDomain: "fir-recipes-ecda5.firebaseapp.com",
  projectId: "fir-recipes-ecda5",
  storageBucket: "fir-recipes-ecda5.appspot.com",
  messagingSenderId: "858551436737",
  appId: "1:858551436737:web:96060d9b94ad092ea49b40",
  measurementId: "G-XB4Y02P0LS",
};

// V9
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}
const analytics = getAnalytics(firebaseApp);

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export default firebaseApp;
export { analytics, auth, firestore, storage };
