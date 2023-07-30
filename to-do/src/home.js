import { Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Login from "./components/login/login";


function Home() {
    return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>
        <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login/>}> </Route>
    </Routes>
    </>
    )
}

export default Home;