import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { connectedUser, loading, error } = useSelector((state) => state.users);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to={"/"}>Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to={"/"}>Home </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to={"/about"}>About Us </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to={"/contact"}>Contact Us </Link>
      </li>
      
    </ul>
    
  </div>
  <form class="form-inline my-2 my-lg-0">
    {connectedUser ? (
      <>
      <Link to="/profile" class="btn btn-outline-success my-2 my-sm-0" type="submit">Profile</Link>
      <button class="btn btn-danger my-2 my-sm-0" type="submit">Logout</button>
      </>
    ) : (
      <Link to="/login" class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</Link>
    
    )}
    </form>
</nav>
    );
}

export default NavBar;
