import { Route, Routes } from "react-router-dom";
import Login from "./Auth/Login.jsx";
import SignUp from "./Auth/SignUp";

const Views = () => {
    return <Routes>
        <Route path="/" />
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
}

export default Views;