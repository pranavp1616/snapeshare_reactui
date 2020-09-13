import React from 'react';
import Login from '../components/Login';
import Logo from '../components/Logo';

class LandingPage extends React.Component{
    render(){
        return  <div className='container'>
                    <Logo />
                    <Login />
                    <h5><a href='/register'>Create a new account?</a></h5>
                    <h6><b>REST API</b><a href='https://github.com/pranavp1616/snapshare_nodejs_api'>Node JS (Express) github</a></h6>
                    <h6><b>UI</b><a href='https://github.com/pranavp1616/snapeshare_reactui'>React JS github</a></h6>
                </div>
    }
}

export default LandingPage; 