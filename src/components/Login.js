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
        return <div className='container text-center'>
                    <div className='card mx-auto' style={{width:'400px'}}>
                    <div className='card-body'>
                        <input  onChange={e => this.setState({loginUsername:e.target.value}) } 
                                type='text' 
                                id='username' placeholder='username'
                                className='form-control' style={{margin:'5px'}}
                                />
                        <input  onChange={e => this.setState({loginPassword:e.target.value}) }  
                                type='password' 
                                className='form-control' style={{margin:'5px'}}
                                id='password' placeholder='password' />
                        <button className='btn btn-primary' style={{margin:'5px'}} 
                                onClick={this.loginLogic}>login</button>                                     
                        <p>{this.state.errorMessage}</p>
                    </div>
                    </div>
                </div>
    }
        
}

export default Login;
