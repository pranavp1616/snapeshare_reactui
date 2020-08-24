import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

class LandingPage extends React.Component{
    render(){
        return <div>
                    <Login />
                    <Register />
        </div>
    }
}

export default LandingPage; 