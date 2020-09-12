import React from 'react';
import Login from '../components/Login';
import Logo from '../components/Logo';

class LandingPage extends React.Component{
    render(){
        return  <div>
                    <Logo />
                    <Login />
                    <h5><a href='/register'>Create a new account?</a></h5>
                    <b>REST API</b> <a href='https://github.com/pranavp1616/snapshare_api/'>Django (python) github</a>
                    <b>UI</b> <a href='https://github.com/pranavp1616/snapeshare_reactui'>React (JS) github</a>
                </div>
    }
}

export default LandingPage; 