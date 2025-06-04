import { useState } from "react";
import './login.css';
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";





function LoginData() {
    let navigate=useNavigate()

    const [mail, setMail] = useState("")
    const [pass1, setPass1] = useState("")

    const changeEmail = (a) => {
        console.log(a.target.value)
        setMail(a.target.value)
    }

    const changePass1 = (a) => {
        console.log(a.target.value)
        setPass1(a.target.value)
    }


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
    
        const LoginData = (e) => {
            e.preventDefault()
    
           
                signInWithEmailAndPassword(auth, mail, pass1)
                    .then(() => {
                        // alert("Logged In Successfully")
                        toast.success("Logged In")
                        navigate("/main")
                    })
                    .catch((err) => {
                        toast.error("Invalid Credential")
                        console.log("Error", err)
                    })
            
        }

    return (
        <div className="App">

        <div className="title">
            <h1>Wellcome To The <br /><span>Student Dashboard</span></h1>
        </div>
        <div className="content" style={{ width: "450px", paddingTop: "30px" }}>
            <div className="card">
                <div className="card-title">
                    <h1 className="text-center">Log In</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={LoginData}>
                        <div class="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" value={mail} onChange={changeEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" value={pass1} onChange={changePass1} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                        Don't Have An Account<Link to={"/register"}> Sign In</Link>
                    </form>
                </div>
            </div>
            

        </div>


    </div>
    )

}

export default LoginData;
