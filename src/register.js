import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './login.css';
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

function Register() {

    let navigate = useNavigate();

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")

    const changeName = (a) => {
        console.log(a.target.value)
        setName(a.target.value)
    }

    const changeMail = (a) => {
        console.log(a.target.value)
        setMail(a.target.value)
    }

    const changePass1 = (a) => {
        console.log(a.target.value)
        setPass1(a.target.value)
    }

    const changePass2 = (a) => {
        console.log(a.target.value)
        setPass2(a.target.value)
    }
    // Firebase Config
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

    const registerData = (e) => {
        e.preventDefault()

        if (pass1 != pass2) {
            alert("Password Does Not Match")
        }
        else {
            createUserWithEmailAndPassword(auth, mail, pass1)
                .then(() => {
                    alert("New Account Created")
                })
                .catch((err) => {
                    console.log("Error", err)
                })
        }


    }

    return (
        <div className="App">

            <div className="title">
                <h1>Wellcome To The <br /><span>Student Dashboard</span></h1>
            </div>
            <div className="container2">
                <div className="card">
                    <div className="card-title">
                        <h1 className="text-center">Sign Up</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={registerData}>
                            <div class="mb-3">
                                <label className="form-label">Enter Name</label>
                                <input type="text" value={name} onChange={changeName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" value={mail} onChange={changeMail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" value={pass1} onChange={changePass1} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" value={pass2} onChange={changePass2} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Sign In</button>
                            Already Have An Account<Link to={"/"}> Log In</Link>
                        </form>
                    </div>
                </div>
                

            </div>


        </div>
    );
}

export default Register;
