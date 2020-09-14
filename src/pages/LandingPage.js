import React from 'react';
import Login from '../components/Login';
import Logo from '../components/Logo';

class LandingPage extends React.Component{
    render(){
        return  <div className='container'>
                    <div className='text-center'>
                            <Logo />
                            <Login />
                            <div style={{margin:'20px'}}>
                                <h5><a href='/register'>Create a new account?</a></h5>
                            </div>
                            <div style={{margin:'30px'}}>
                                <h5>Github</h5>
                                <h6>API <a href='https://github.com/pranavp1616/snapshare_nodejs_api'>Node JS Express</a></h6>
                                <h6>UI <a href='https://github.com/pranavp1616/snapeshare_reactui'>React JS</a></h6>
                            </div>
                    </div>
                </div>
    }
}

export default LandingPage; 