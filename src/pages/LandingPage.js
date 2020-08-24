import React from 'react';
import Login from '../components/Login';

class LandingPage extends React.Component{
    render(){
        return  <div>
                    <div className='row'>
                        <div className='container center'>
                            Snapeshare and logo
                        </div>
                    </div>
                    <div className='row'>
                        <Login />
                    </div>
                    <div className='row'>
                        <div className='container center'>
                            <a href='/register'>Create a new account?</a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='container center'>
                            Tech stack
                            <br/>
                            <a href='https://github.com/pranavp1616/snapeshare_reactui'>React JS code</a>
                            <br/>
                            <a href='https://github.com/pranavp1616/snapshare_api/'>Python Django code</a>
                            <br/>
                            Deployed on Amazon AWS and heroku 
                            <br/>
                            <h1>Insert wallpaper in this landing page</h1>
                        </div>
                    </div>
                </div>
    }
}

export default LandingPage; 