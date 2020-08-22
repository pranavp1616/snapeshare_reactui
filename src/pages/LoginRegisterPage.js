import React, {useState} from 'react';
import {API} from '../components/Global';


function LoginPage(){
    //state variables using hooks
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [errorMessage, setErrorMessage]   = useState('');
    
    async function loginLogic(){
        var url = 'http://127.0.0.1:8000/api/user/login/';
        var formData = new FormData();  
        formData.append('username',loginUsername);  
        formData.append('password',loginPassword);
        var request = new Request(url, {method:'POST',  body:formData}  );

        const resp = await fetch(request);
        const data = await resp.json();
        setErrorMessage(data);
    }

    return <div>
                <h1>Login</h1>
                    <input onChange={e => setLoginUsername(e.target.value)} type='text' placeholder='username'/>
                    <input onChange={e => setLoginPassword(e.target.value)} type='password' placeholder='password'/>
                <button onClick={loginLogic}>Login</button>
                <p>{errorMessage}</p>
            </div>
        
}

function RegisterPage(){
    //state variables using hooks
    const [reg_username, setRegUsername] = useState('');
    const [reg_password, setRegPassword] = useState('');
    const [reg_email, setRegEmail] = useState('');
    const [errorMessage, setErrorMessage]   = useState('');
    function registerLogic(){
        alert(reg_username +" " + reg_email + " " + reg_password);
        // call register API here
        setErrorMessage('Account already exists');
    }
    return <div>
                <h1>Register</h1>
                    <input onChange={(e) => setRegUsername(e.target.value)} type='text' placeholder='username'/>
                    <input onChange={(e) => setRegEmail(e.target.value)} type='text' placeholder='email'/>
                    <input onChange={(e) => setRegPassword(e.target.value)} type='password' placeholder='password'/>
                <button onClick={registerLogic}>Register</button>
                <p>{errorMessage}</p>
            </div>
}

export {LoginPage};
export {RegisterPage};
