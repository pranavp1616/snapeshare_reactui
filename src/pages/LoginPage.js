import React from 'react';

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loginUsername : '',
            loginPassword : '',
            errorMessage  : ''
        }        

        // bind loginLogic (userdefined func unlike render or constructor) Otherwise we cant use(READ) state variables
        // in non react functions(userdefined) like loginLogic,etc 
        this.loginLogic = this.loginLogic.bind(this); 
    }

    async loginLogic(){
        var url = 'http://127.0.0.1:8000/api/user/login/';
        var formData = new FormData();  
        formData.append('username',this.state.loginUsername);  
        formData.append('password',this.state.loginPassword);
        var request = new Request(url, {method:'POST',  body:formData}  );
        const resp = await fetch(request);
        const data = await resp.json();

        this.setState( { errorMessage: data.response });

        if(data.response == 'success'){
            localStorage.auth_token = data.token;
        }
    }

    render(){
        return <div>
                    <h1>Login</h1>
                        <input onChange={e => this.setState({loginUsername:e.target.value}) } type='text' placeholder='username'/>
                        <input onChange={e => this.setState({loginPassword:e.target.value}) }  type='password' placeholder='password'/>
                    <button onClick={this.loginLogic}>Login</button>
                    <p>{this.state.errorMessage}</p>
                    <a href='/register'>Register</a>
                </div>
    }
        
}

export default LoginPage;
