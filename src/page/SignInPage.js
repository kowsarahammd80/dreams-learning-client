import React from 'react';
import NavBar from '../component/shared/navBar/NavBar';
import SignIn from '../component/signIn/SignIn';

const SignInPage = () => {
  return (
    <div className='logingBg'>
      <NavBar />
      <SignIn />

    </div>
  );
};

export default SignInPage;