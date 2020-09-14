import React from 'react';
import {API} from './Global';
const REGISTER_ENDPOINT = 'user/register/';

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
        this.registerLogic = this.registerLogic.bind(this); 
    }

    async registerLogic(){
        var formData = new FormData();  
        formData.append('username',this.state.regUsername);  
        formData.append('email',this.state.regEmail);  
        formData.append('password',this.state.regPassword);
        formData.append('firstname',this.state.regFirstname);

        var request = new Request(API+ REGISTER_ENDPOINT, {method:'POST',  body:formData}  );
        const resp = await fetch(request);
        const data = await resp.json();

        if(data.response==='error')
            this.setState( { errorMessage: data.message });
        if(data.response === 'success')
            this.setState( { errorMessage: data.message });            
    }

    render(){
        return  <div className='card mx-auto' style={{width:'400px'}}>
                    <div className='card-body'>
                        <input  onChange={(e) => this.setState({regUsername:e.target.value})} 
                                type='text' 
                                id='username' placeholder='username'
                                className='form-control' style={{margin:'5px'}}/>
                        <input  onChange={(e) => this.setState({regFirstname:e.target.value})}
                                type='firstname' 
                                id='firstname' placeholder='first name'
                                className='form-control' style={{margin:'5px'}}/>
                        <input  onChange={(e) => this.setState({regEmail:e.target.value})} 
                                type='text' 
                                id='email'placeholder='email'
                                className='form-control' style={{margin:'5px'}}/>
                        <input  onChange={(e) => this.setState({regPassword:e.target.value})}
                                type='password' 
                                id='password'placeholder='password'
                                className='form-control' style={{margin:'5px'}}/>
                        <button className='btn btn-primary' style={{margin:'5px'}}
                                onClick={this.registerLogic}>register</button>
                        <p>{this.state.errorMessage}</p>
                    </div>
                </div>
    }
}

export default Register;