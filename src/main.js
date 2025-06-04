import { useEffect, useState } from "react"
import './main.css'
import { Link, useNavigate } from "react-router-dom"
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import UseAuth from "./user";
import Pagination from "./pagination";
import { ToastContainer,toast } from "react-toastify";

let url = "https://student-data-manager-ruc1.onrender.com/Students"

function Main() {
    let navigate = useNavigate()

    const [data, setData] = useState("")

    let currentUser = UseAuth()

    useEffect(() => {
        fetch(url, { method: "GET" })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }, [])

    //Delete Functionality

    const deleteData = (id) => {
        console.log(id)
        if (window.confirm("Delete The Data?")) {
            fetch("https://student-data-manager-ruc1.onrender.com/Students/" + id, { method: "DELETE" })
                .then((res) => {
                    alert("Deleted Successfully")
                    window.location.reload()
                    navigate("/main")
                })
                .catch((err) => {
                    console.log("error", err)
                })
        }
    }

    //Edit Functionality

    const editData = (id) => {
        console.log(id)
        navigate("/edit/" + id)
    }

    // Filter Functionality

    const [value, setValue] = useState("")

    const changeValue = (e) => {
        setValue(e.target.value)
    }
    const filterData = (e) => {
        e.preventDefault()
        fetch(`https://student-data-manager-ruc1.onrender.com/Students?q=${value}`, { method: "GET" })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
                console.log(resp)
            })
    }

    let arr = ['id', 'name', 'email', 'phone']

    const [sort, setSort] = useState("")

    const sortData = (e) => {
        e.preventDefault()
        let value = e.target.value
        setSort(value)

        fetch(`https://student-data-manager-ruc1.onrender.com/Students?_sort=${value}&_order=asc `, { method: "GET" })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
                console.log(resp)
            })

    }
    //LogOut operation

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

    const LogOut = (e) => {
        e.preventDefault()
        signOut(auth)
            .then(() => {
                alert("Logged Out Successfully")
                toast.success("Logged Out Successfully")
                navigate("/register")
            })
            .catch((err) => {
                toast.error("Error")
                console.log("Error", err)
            })
    }

    // Pagination

    const [page, setPage] = useState(1)
    const [records, setRecords] = useState(5)

    //first page fist records and last records

    let lr = page * records
    let fr = lr - records

    let mydata = data.slice(fr, lr)

    const changePage = (n) => {
        setPage(n)
    }
    const nextPage=(n)=>{
        setPage(page+1)
        
    }
    const prevPage=(n)=>{
        if(page>1){
        setPage(page-1)
        }
        else{
            alert("No Previous Pages")
        }
        
    }



    return (
        <div className="wraper">
            <div className="head" style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                <h1 style={{fontWeight:"bold",color:"green"}}> <i class="fa-solid fa-graduation-cap"></i> Student Data Management</h1>


                <div className="user" style={{ display: "flex" }}>
                    <h1 className="user" style={{ fontSize: "20px" }}><i class="fa-solid fa-user"></i> {currentUser?.email} </h1>
                    <button onClick={LogOut} className="btn btn-dark" > Log Out</button>
                </div>
            </div>
            <div className="container">
                <div className="content" >
                    <div className="sort">
                        <h5>Filter  </h5>
                        <select value={sort} onChange={sortData}>
                            <option>--Select--</option>
                            {arr.map((item) => (
                                <option>{item}</option>
                            ))}
                        </select>
                        <form onKeyUp={filterData}>
                            <input type="text" value={value} onChange={changeValue} placeholder="Enter text to search" />
                            <button type="submit">Search</button>
                        </form>
                    </div>

                    <Link to='/form' id="add" className="btn btn-success">Add <i class="fa-solid fa-plus"></i></Link>

                </div>
                <table className="">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Mail</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mydata && mydata.map((item) => (
                            <tr>
                                <td>{item.id} </td>
                                <td>{item.name} </td>
                                <td>{item.email} </td>
                                <td>{item.phone} </td>
                                <td>{item.address} </td>
                                <td>
                                    <button onClick={() => { editData(item.id) }} className="btn" id="btn1"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button onClick={() => { deleteData(item.id) }} className="btn" id="btn2"><i class="fa-solid fa-trash"></i></button>

                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <Pagination total={data.length} records={records} fun={changePage} next={nextPage} prev={prevPage} page={page}/>
        </div>


    )
}
export default Main;