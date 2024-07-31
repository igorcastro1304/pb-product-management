import { signInWithEmailAndPassword, signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAr32o4mR3Zg-jitaU148sKY1wE_iKB-G0",
    authDomain: "project-management-2024.firebaseapp.com",
    databaseURL: "https://project-management-2024-default-rtdb.firebaseio.com",
    projectId: "project-management-2024",
    storageBucket: "project-management-2024.appspot.com",
    messagingSenderId: "284436445146",
    appId: "1:284436445146:web:7273a8ecd20b916836f2e3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const verifyUserLogin = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid);
        } else {
            // User is signed out
            // ...
        }
    });
}

const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        });
}

const logout = () => {
    signOut(auth).then(() => {
        console.log("Logout concluded")
    }).catch((error) => {
        console.log(error);
    });
}


export {
    verifyUserLogin,
    login,
    logout,
}