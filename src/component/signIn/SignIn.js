import React from 'react';
import "./SignIn.css";
import singInImg from '../../resource/sing-in.png'
import { Link } from 'react-router-dom';
import SocialSIgnIn from '../shared/SocialSIgnIn';


const SignIn = () => {

  const handelSignIn = (event) => {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    console.log(user.email)

  }
  return (
    <div className='container-fluid pb-4'>

      <div className='row  align-items-center g-4'>

        < div className='col-12 col-lg-6 ps-0 ps-lg-5 d-none d-lg-block' >
          <img src={singInImg} className='img-fluid' alt="" />
          <div className='text-center pt-3'>
            <h1 className='fw-bold'>Welcome to <br /> DreamLMS Courses.</h1>
            <p className='px-0 px-lg-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore vitae iusto officiis repudiandae cumque aliquid eius laborum doloribus non?</p>
          </div>
        </div >

        <div className='col-12 col-lg-6 '>

          <div className='row align-items-center'>
            <div className='col-0 col-lg-1'>

            </div>
            <div className='col-8 col-lg-7 ps-5'>
              <img src="https://dreamslms.dreamguystech.com/html/assets/img/logo.svg" className='w-50 pb-2 pb-lg-5' alt="" />
              <h1>Sign into Your Account</h1>
            </div>
            <div className='col-4 d-flex align-items-center gap-2 backtoHome'>
              <i className="fa-solid fa-arrow-left"></i>
              <Link to="/home" className='backtoHome'>Back to Home</Link>
            </div>

          </div>



          <form className='w-75 pt-5 container' onSubmit={handelSignIn}>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label fw-bold ">Email</label>
              <input type="email" name='email' className="form-control  inputField" id="formGroupExampleInput" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Password</label>
              <input type="password" name='password' className="form-control  inputField" id="formGroupExampleInput2" placeholder="Password" required />
            </div>

            <Link to="/password-reset" className='forgotPass'>Forgot Password ?</Link>

            <div className='pt-4'>
              <button type="submit" className="btn submitButton btn-lg w-100">Sign In</button>
            </div>

          </form>

          <SocialSIgnIn />
          <div className=''>
            <p className='text-center'>Need User? <Link to="/sign-up" className='forgotPass'> Create Account </Link> </p>
          </div>



        </div>

      </div >

    </div >
  );
};

export default SignIn;