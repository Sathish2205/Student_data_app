import { useEffect, useState } from "react";

function Cart(){

    const [cart,setCart]=useState("")

    useEffect(()=>{
        fetch("http://localhost:3001/Products",{method:"GET"})
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            setCart(resp)
        })
        .catch((err)=>{
            console.log("error",err)
        })
    })

    const removeCart=(id)=>{
        fetch("http://localhost:3001/Products/"+id,{method:"DELETE"})
        .then(()=>{
            alert("Deleted")
            window.location.reload()
        })
    }
    return(
        <div>
            <h2>Products</h2>
            <div className="container">

               {cart && cart.map((item)=>(
                 
                <div className="card">
                <div className="card-title">
                    <h3>Name:{item.name}</h3>
                </div>
                <div className="card-body">
                    <h4>Email:{item.email}</h4>
                    <h4>Mobile:{item.phone}</h4>
                    <button onClick={()=>{removeCart(item.id)}} className="btn btn-danger">Remove</button>
                </div>
                
            </div>
               ))}


            </div>
        </div>
    )
}
export default Cart;