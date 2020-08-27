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
                            <div className='container center'>
                                Log out successful
                                <br/>                                
                                <a href='/login'>login</a>
                            </div>  
                        </div>
                        ||
                        <LandingPage />
                    }
                </div>;
    }
}

export default LogoutPage;