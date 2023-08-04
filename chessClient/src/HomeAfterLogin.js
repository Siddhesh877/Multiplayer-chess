import logo from "./Props/chessGIF.gif";
import { Link } from "react-router-dom";
import './Home.css';
import Navbarafter from './NavbarAfterLogin.js';
function Home(){
    return (
        <>
        <Navbarafter/>
        <div className="container">
        <div className="Title">
            <h1>Play Chess Online!</h1>
            <h4>Invite your friend online</h4>
            <Link class="btn btn-success" to="/game" role="button">Play</Link>
        </div>
        <div className="ChessGIF">
            <img src={logo} alt="chessGIF"className="ChessGIF1"/>
        </div>
        </div>
        
        </>
    )
}
export default Home;