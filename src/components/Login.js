import React from 'react';
import {API} from './Global';
const LOGIN_ENDPOINT = 'user/login/';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loginUsername : '',
            loginPassword : '',
            errorMessage  : ''
        }        
        this.loginLogic = this.loginLogic.bind(this); 
    }

    async loginLogic(){
        var formData = new FormData();  
        formData.append('username',this.state.loginUsername);  
        formData.append('password',this.state.loginPassword);
        
        var request = new Request(API + LOGIN_ENDPOINT, {method:'POST', body:formData} );
        const resp = await fetch(request);
        const data = await resp.json();
        
        if(data.response === 'error')
            this.setState( { errorMessage: data.message });
        if(data.response === 'success'){
            this.setState( { errorMessage: data.message });
            localStorage.auth_token = data.auth_token;
            localStorage.loggedinUser = this.state.loginUsername;
            window.location = '/home';
        }
    }

    render(){
        return <div>
                    <input  onChange={e => this.setState({loginUsername:e.target.value}) } 
                            type='text' 
                            id='username'/>
                    <input  onChange={e => this.setState({loginPassword:e.target.value}) }  
                            type='password' 
                            id='password'/>
                    <button onClick={this.loginLogic}>login</button>                                     
                    <p>{this.state.errorMessage}</p>
                </div>
    }
        
}

export default Login;
