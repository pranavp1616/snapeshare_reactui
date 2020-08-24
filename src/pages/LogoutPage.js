import React from 'react';
import PleaseLoginPage from '../components/PleaseLoginPage';

class LogoutPage extends React.Component {
    componentDidMount(){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('loggedinUser');
    }
    render(){
        return <div>
                    { localStorage.auth_token != undefined && 
                        <div>
                            <h1>Log out successful</h1>
                            <a href='/login'>login</a>
                        </div>  
                        ||
                        <PleaseLoginPage />
                    }
                </div>;
    }
}

export default LogoutPage;