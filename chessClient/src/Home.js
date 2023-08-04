import logo from "./Props/chessGIF.gif";
import { Link } from "react-router-dom";
import './Home.css';
import Navbar from './Navbar';
function Home(){
    return (
        <>
         {/* <Navbar/> */}
        <div className="container">
        <div className="Title">
            <h1>Play Chess Online!</h1>
            <h4>Invite your friend online</h4>
            <Link class="btn btn-success login" to="/login" role="button">Login</Link>
            <Link type="button" class="btn btn-outline-success signup" to="/">Signup</Link>

        </div>
        <div className="ChessGIF">
            <img src={logo} alt="chessGIF"className="ChessGIF1"/>
        </div>
        </div>
        
        </>
    )
}
export default Home;