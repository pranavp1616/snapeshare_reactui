import React from 'react';
import Register from '../components/Register';
import Logo from '../components/Logo';

function RegisterPage(){
    return  <div>
                <Logo />
                <div className='row'>
                    <Register />
                </div>
                <div className='row'>
                    <div className='container center'>
                        <a href='/login'>Login</a>
                    </div>
                </div>
            </div>
}
export default RegisterPage;