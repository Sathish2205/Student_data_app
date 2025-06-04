import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";




const firebaseConfig = {
    apiKey: "AIzaSyBwPNIMy-IsnKmJUgOhXhvZatgT8xtIdwQ",
    authDomain: "besant-task5.firebaseapp.com",
    projectId: "besant-task5",
    storageBucket: "besant-task5.firebasestorage.app",
    messagingSenderId: "913388772914",
    appId: "1:913388772914:web:90d57453e2ace35c90a62b",
    measurementId: "G-73V6L7PGSD"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth()

function UseAuth() {

    const [current, setCurrent] = useState("")

    useEffect(() => {
        let x = onAuthStateChanged(auth, (user) => { setCurrent(user) })
        return x

    }, [])

    return current

}
export default UseAuth;