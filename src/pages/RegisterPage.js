import React from 'react';
import Register from '../components/Register';
import Logo from '../components/Logo';

function RegisterPage(){
    return  <div className='container'>
                <Logo />
                <Register />
                <h5><a href='/login'>Login?</a></h5>
            </div>
}

export default RegisterPage;