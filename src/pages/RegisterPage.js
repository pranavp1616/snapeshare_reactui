import React from 'react';
import Register from '../components/Register';

function RegisterPage(){
    return  <div>
                <div className='row'>
                    <div className='container center'>
                        Snapeshare and logo
                    </div>
                </div>
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