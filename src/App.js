import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./main";
import TaskForm from "./taskform";
import Data from "./data";
import TaskEdit from "./studentedit";
import Register from "./register";
import LoginData from "./login";
import Cart from "./cart";
import { ToastContainer } from "react-toastify";

function App() {
  return(
   
    <Router>
       <ToastContainer/>
      <Routes>
        <Route element={<Main />} path="/main" />
        <Route element={<TaskForm />} path="/form" />
        {/* <Route element={<Data/>} path="/"/> */}
        <Route element={<TaskEdit/>} path="/edit/:stdid"/>
        <Route element={<Register/>} path="/register"/>
        <Route element={<LoginData/>} path="/"/>
        <Route element={<Cart/>} path="/cart"/>
      </Routes>
    </Router>
  )
}

export default App;
