import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './form.css'

let url="https://student-data-manager-ruc1.onrender.com/Students"

function TaskForm() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")

    let navigate=useNavigate()

    const changeName=(e)=>{
        setName(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePhone=(e)=>{
        setPhone(e.target.value)
    }
    const changeAddress=(e)=>{
        setAddress(e.target.value)
    }

    let data={name,email,phone,address}
const postData=(e)=>{
    e.preventDefault()
    fetch(url,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(data)
    })
    .then(()=>{
        alert("Posted Successfully")
        navigate("/main")
    })
    .catch((err)=>{
        alert("Getting Error")
    })
}
 

    return (
        <div className="wraper1">
            <div className="container" 
            // style={{width:"430px", paddingTop:"20px"}}
            >
                <div className="card" >
                    <div className="card-title">
                        <h1 className="text-center">Add Student Data</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={postData}>
                            <div class="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" value={name} onChange={changeName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" value={email} onChange={changeEmail} className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="number" value={phone} onChange={changePhone} className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" value={address} onChange={changeAddress} className="form-control" id="exampleInputPassword1"/>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaskForm;