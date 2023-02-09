import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Home from './../Home/Home';

export default function Navbar({userData,logout}) {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.bgNavbar}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="">
      Noxe
    
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {userData?  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive})=>
        isActive?"bg-info rounded nav-link" : "nav-link"  
        }
           to="">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>
        isActive?"bg-info rounded nav-link" : "nav-link"  
        } to="movies">Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>
        isActive?"bg-info rounded nav-link" : "nav-link"  
        } to="tvshows">Tv shows</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>
        isActive?"bg-info rounded nav-link" : "nav-link"  
        } to="people">People</NavLink>
        </li>
      </ul>:''}

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <div className='social-media  d-flex align-items-center'>
          <a href="https://www.facebook.com/profile.php?id=100004498818792&mibextid=ZbWKwL">
          <i className='fab fa-facebook mx-2'></i>
          </a>
          <i className='fab fa-spotify mx-2'></i>
          <a href="https://instagram.com/mostafa_2sma3el?igshid=ZmZhODViOGI=">
          <i className='fab fa-instagram mx-2'></i>
          </a>
          <i className='fab fa-youtube mx-2'></i>
        </div>
      {userData?
     <li className="nav-item">
      <div className='d-flex align-items-center'>
        <NavLink className={({isActive})=>
        isActive?"bg-info nav-link rounded" : "nav-link"  
        } to='profile'>Hello : {userData.first_name}</NavLink>
        <NavLink className="nav-link" to="login" onClick={logout}>
      Logout
      </NavLink>
      </div>
   </li>
     :<>
       <li className="nav-item">
          <NavLink className={({isActive})=>
        isActive?"bg-info nav-link" : "nav-link"  
        } to="login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>
        isActive?"bg-info nav-link" : "nav-link"  
        } to="register">Register</NavLink>
        </li>
     </>
    }
        
     
      </ul>
    </div>
  </div>
</nav>
  )
}
