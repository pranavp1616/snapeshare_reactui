import React from 'react';
import {API} from './Global';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            regUsername : '',
            regFirstname : '',
            regEmail    : '',
            regPassword : '',
            errorMessage  : ''
        };
        // bind registerLogic (userdefined func unlike render or constructor) Otherwise we cant use(READ) state variables
        // in non react functions(userdefined) like registerLogic,etc 
        this.registerLogic = this.registerLogic.bind(this); 
    }

    async registerLogic(){
        var url =   API+ 'user/register/';
        var formData = new FormData();  
        formData.append('username',this.state.regUsername);  
        formData.append('email',this.state.regEmail);  
        formData.append('password',this.state.regPassword);
        formData.append('firstname',this.state.regFirstname);
        var request = new Request(url, {method:'POST',  body:formData}  );
        const resp = await fetch(request);
        const data = await resp.json();
        if(data.response==='error')
            this.setState( { errorMessage: data.message });
        if(data.response === 'success')
            this.setState( { errorMessage: data.message });            
            //window.location = '/login';
    }

    render(){
        return  <div>
                    <input  onChange={(e) => this.setState({regUsername:e.target.value})} 
                    type='text' 
                    id='username'/>
                    <input  onChange={(e) => this.setState({regFirstname:e.target.value})}
                    type='firstname' 
                    id='firstname'/>
                    <input  onChange={(e) => this.setState({regEmail:e.target.value})} 
                    type='text' 
                    id='email'/>
                    <input  onChange={(e) => this.setState({regPassword:e.target.value})}
                    type='password' 
                    id='password'/>
                    <button onClick={this.registerLogic}>
                    Register
                    </button>
                    <p>{this.state.errorMessage}</p>
                </div>
    }
}

export default Register;