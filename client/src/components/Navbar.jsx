import React, { useContext } from 'react'
import Logo from "../components/img/img1.png";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


const Navbar = () => {
const {currentUser ,logout} = useContext(AuthContext);

console.log(currentUser);
  
  return (
    <div className='navbar'>
     <div className="container">
      <div className="logo">
        <Link className='link' to="/">
            <img src={Logo} alt=''></img>
        </Link>
      
      </div>
      <div className="links">
        <Link className='link' to="/?cat=art">
          <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=science">
          <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to="/?cat=technology">
          <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to="/?cat=design">
          <h6>DESIGN</h6>
          </Link>
          <Link className='link' to="/?cat=food">
          <h6>FOOD</h6>
          </Link>
        <span>{currentUser? currentUser.username : "Login"}</span>
        {currentUser?  <span onClick={logout}>Logout</span>:<Link className='link' to="/login">Login</Link>}
       
        <span className='write'>
          <Link className='link' to="/write">Write</Link>
        </span>
      </div>
     </div>
    </div>
  )
}

export default Navbar
