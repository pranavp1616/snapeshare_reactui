import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

class LandingPage extends React.Component{
    render(){
        return  <div>
                    <Login />
                    <a href='/register'>Register</a>
                </div>
    }
}

export default LandingPage; 