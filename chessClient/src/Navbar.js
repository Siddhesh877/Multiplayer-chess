import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Chess</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link " aria-current="page" to="/">Home</Link>
        <Link class="nav-link " to="/login">Login</Link>
        
      </div>
    </div>
  </div>
</nav>
        </>
    );
}
export default Navbar