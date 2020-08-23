import React from 'react';

class LogoutPage extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('loggedinUser');
    }
    render(){
        return <div>
                <h1>Log out successful</h1>
                <a href='/login'>login</a>
        </div>;
    }
}

export default LogoutPage;