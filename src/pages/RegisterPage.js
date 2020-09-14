import React from 'react';
import Register from '../components/Register';
import Logo from '../components/Logo';

function RegisterPage(){
    return  <div className='container'>
                <div className='text-center'>   
                    <Logo />
                    <Register />
                    <div style={{margin:'20px'}}>
                        <h5><a href='/login'>Login?</a></h5>
                    </div>
                </div>
            </div>
}

export default RegisterPage;