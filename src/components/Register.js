import React from 'react';
import {API} from './Global';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            regUsername : '',
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
        return <div>
                    <div className='container' style={{ marginTop: '100px', maxWidth:'350px' }}>
                        <div className='card hoverable'>
                            <div className='card-content center'>    
                                    <div className="input-field">
                                        <input  onChange={(e) => this.setState({regUsername:e.target.value})} 
                                                type='text' 
                                                id='username'/>
                                        <label htmlFor='username'>username</label>
                                    </div>
                                    <div className="input-field">
                                        <input  onChange={(e) => this.setState({regEmail:e.target.value})} 
                                                type='text' 
                                                id='email'/>
                                        <label htmlFor='email'>email</label>
                                    </div>
                                    <div className="input-field">
                                        <input  onChange={(e) => this.setState({regPassword:e.target.value})}
                                                type='password' 
                                                id='password'/>
                                        <label htmlFor='password'>password</label>
                                    </div>
                                    <button className="btn blue waves-effect waves-light"
                                            onClick={this.registerLogic}>
                                            Register
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

export default Register;