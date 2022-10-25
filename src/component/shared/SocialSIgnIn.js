import React from 'react';
import './SocialSignIn.css';

import google from '../../resource/google.png';
import github from '../../resource/github.png';
import { Link } from 'react-router-dom';

const SocialSIgnIn = () => {
  return (
    <div className=' py-5 mt-4'>
      <p className='text-center '>Or Sign In with</p>

      <div className='row justify-content-center align-items-center'>
        <button className='col-12 col-lg-5 d-flex align-items-center justify-content-center g-3 socialButton middleBorder'>
          <img src={google} className="w-10 me-2" alt="" />
          <h2 className='socialTag'>Sign in using Google</h2>
        </button>
        <button className='col-12 col-lg-5 d-flex align-items-center justify-content-center g-3 socialButton'>
          <img src={github} className="w-10 pe-2" alt="" />
          <h2 className='socialTag'>Sign in using Git Hub</h2>
        </button>
      </div>

     


    </div>
  );
};

export default SocialSIgnIn;