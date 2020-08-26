import React from 'react';
import {API} from './Global';

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
        var url = API +'user/login/';
        var formData = new FormData();  
        formData.append('username',this.state.loginUsername);  
        formData.append('password',this.state.loginPassword);
        var request = new Request(url, {method:'POST',  body:formData}  );
        const resp = await fetch(request);
        const data = await resp.json();
        if(data.response === 'error')
            this.setState( { errorMessage: data.message });
        if(data.response === 'success'){
            this.setState( { errorMessage: data.message });
            localStorage.auth_token = data.token;
            localStorage.loggedinUser = this.state.loginUsername;
            window.location = '/home';
        }
    }

    render(){
        return <div>
                    <div className='container' style={{ marginTop: '100px', maxWidth:'350px' }}>
                        <div className='card hoverable'>
                                <div className='card-content center'>    
                                    <div className="input-field">
                                        <input  onChange={e => this.setState({loginUsername:e.target.value}) } 
                                                type='text' 
                                                id='username'/>
                                        <label for='username'>username</label>
                                    </div>
                                    <div className="input-field">
                                        <input  onChange={e => this.setState({loginPassword:e.target.value}) }  
                                                type='password' 
                                                id='password'/>
                                        <label for='password'>password</label>
                                    </div>
                                    <button className="btn blue waves-effect waves-light"
                                            onClick={this.loginLogic}>
                                            login
                                    </button>
                                </div>                                
                                <div className='card-action center'>
                                    <p>{this.state.errorMessage}</p>
                                </div>
                        </div>
                    </div>
                </div>
    }
        
}

export default Login;
