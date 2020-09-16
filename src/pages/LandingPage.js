import React from 'react';
import Login from '../components/Login';
import Logo from '../components/Logo';

class LandingPage extends React.Component{
    render(){
        return  <div>
                    <Logo />
                    <Login />
                    <div className='text-center' style={{margin:'30px'}}>
                        <div style={{margin:'20px'}}>
                            <h5><a href='/register'>Create a new account?</a></h5>
                        </div>
                        <h5>Github</h5>
                        <h6>API <a href='https://github.com/pranavp1616/snapshare_node_api'>Node JS Express</a></h6>
                        <h6>UI <a href='https://github.com/pranavp1616/snapshare_react_ui'>React JS</a></h6>
                    </div>
                </div>
    }
}

export default LandingPage; 
