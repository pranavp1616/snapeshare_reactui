import React from 'react';
import LandingPage from '../pages/LandingPage';
import Logo from '../components/Logo';

class LogoutPage extends React.Component {
    componentDidMount(){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('loggedinUser');
    }
    render(){
        return <div>
                    { localStorage.auth_token !== undefined && 
                        <div>
                            <Logo />
                            <br/>
                            <div className='container center'>
                                <h5>log out successful</h5>
                                <br/>                                
                                <h5><a href='/login'>login</a></h5>
                            </div>  
                        </div>
                        ||
                        <LandingPage />
                    }
                </div>;
    }
}

export default LogoutPage;