import { Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/login/login";


function Home() {
    return (
    <>
    <nav>
    </nav>
        <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login/>}> </Route>
    </Routes>
    </>
    )
}

export default Home;