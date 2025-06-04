import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './app.css';
import { useState } from "react";

function Data() {

  let navigate = useNavigate();

  const [page, setPage] = useState("block")
  const [page1, setPage1] = useState("none")

  const logPage = () => {
    let a = page == "block" ? "none" : "block"
    setPage(a)
    let b = page1 == "none" ? "block" : "none"
    setPage1(b)
  }

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
  const submitData = () => {
    if (name.length <= 5) {
      alert("Name is too short")
    }
    else if (pass1 != pass2) {
      alert("Password Does Not Match")
    }
    else {
      alert("The Form Submitted Successfully")
      localStorage.setItem("Mail", mail)
      localStorage.setItem("pass", pass1)

    }
  }
  //Login Page
  const [mail1, setMail1] = useState("")
  const [password, setPassword] = useState("")

  const changeMail1 = (a) => {
    console.log(a.target.value)
    setMail1(a.target.value)
  }

  const changePassword = (a) => {
    console.log(a.target.value)
    setPassword(a.target.value)
  }

  // Local Storage

  let x = localStorage.getItem("Name")
  let y = localStorage.getItem("Mail")
  let z = localStorage.getItem("pass")

  const submitData1 = () => {
    if (y != mail1) {
      alert("Incorrect Mail")
    }
    else if (z != password) {
      alert("Password Does Not Match")
    }
    else {
      alert("The Form Logined Successfully")
      navigate("/main");
    }
  }

  return (
      <div className="App">

        <div className="title">
          <h1>Wellcome To The <br /><span>Student Dashboard</span></h1>
        </div>
        <div className="container" style={{ width: "450px", paddingTop: "30px" }}>
          <div className="card" style={{ display: page }}>
            <div className="card-title">
              <h1 className="text-center">Sign Up</h1>
            </div>
            <div className="card-body">
              <form onSubmit={submitData}>
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
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" style={{ border: "none", background: "none" }} onClick={logPage} > Already Have An Account</button>
              </form>
            </div>
          </div>
          <div>
            <div className="card" style={{ display: page1 }}>
              <div className="card-title">
                <h1 className="text-center">Log In</h1>
              </div>
              <div className="card-body">
                <form onSubmit={submitData1}>
                  <div class="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" value={mail1} onChange={changeMail1} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div class="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" value={password} onChange={changePassword} className="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <button onClick={logPage} style={{ border: "none", background: "none" }}> Don't Have An Account</button>
              </div>

            </div>
          </div>

        </div>


      </div>
  );
}

export default Data;
