import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/authProvider/AuthProvider';
import Loading from '../loading/Loading';
import "./NavBar.css";

const NavBar = () => {
  let { user, loading, logOut } = useContext(AuthContext);
  const [photo, setPhoto] = useState('https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg')
  if (loading) {
    return <Loading />
  }

  const handelSignOut = () => {
    logOut();

  }


  return (

    <nav className="navbar navbar-expand-lg py-4">
      <div className="container">

        <img src="https://dreamslms.dreamguystech.com/html/assets/img/logo.svg" alt="" className="navLogo " />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <NavLink to='/home' className="nav-link active" aria-current="page" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/course' className="nav-link active" aria-current="page" >Course</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/faq' className="nav-link active" aria-current="page" >Faq</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/instactor' className="nav-link active" aria-current="page" >Instructor</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/blogs' className="nav-link active" aria-current="page" >Blogs</NavLink>
            </li>

          </ul>
          {!user ? <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <Link to="/sign-in" className='signInButton rounded-pill decorationNone'>Sign In</Link>
            <Link to="/sign-Up" className='signUpButton rounded-pill decorationNone'>Sign Up</Link>
          </ul>
            :
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <button className='signOutButton rounded-pill decorationNone' onClick={handelSignOut}>SignOut</button>
              <button className='border-0'>
                <img src={user.photoURL || photo} alt="" className='instructorPhoto' />
              </button>
            </ul>
          }



        </div>
      </div>
    </nav>


  );
};

export default NavBar;