import React from 'react';

class RegisterPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginUsername : '',
            loginEmail    : '',
            loginPassword : '',
            errorMessage  : ''
        };
        // bind registerLogic (userdefined func unlike render or constructor) Otherwise we cant use(READ) state variables
        // in non react functions(userdefined) like registerLogic,etc 
        this.registerLogic = this.registerLogic.bind(this); 

    }

    async registerLogic(){
        var url = 'http://127.0.0.1:8000/api/user/register/';
        var formData = new FormData();  
        formData.append('username',this.state.loginUsername);  
        formData.append('email',this.state.loginEmail);  
        formData.append('password',this.state.loginPassword);
        var request = new Request(url, {method:'POST',  body:formData}  );
        const resp = await fetch(request);
        const data = await resp.json();

        this.setState( { errorMessage: data.response });
    }

    render(){
        return <div>
                    <h1>Register</h1>
                        <input onChange={(e) => this.setState({loginUsername:e.target.value})} type='text' placeholder='username'/>
                        <input onChange={(e) => this.setState({loginEmail:e.target.value})} type='text' placeholder='email'/>
                        <input onChange={(e) => this.setState({loginPassword:e.target.value})}type='password' placeholder='password'/>
                    <button onClick={this.registerLogic}>Register</button>
                    <p>{this.state.errorMessage}</p>
                </div>
    }
}

export default RegisterPage;