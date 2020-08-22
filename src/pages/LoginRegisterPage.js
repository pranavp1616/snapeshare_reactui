import React, {useState} from 'react';

function LoginPage(){
    //state variables using hooks
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [errorMessage, setErrorMessage]   = useState('');
    function loginLogic(){
        alert(loginUsername +" " +loginPassword);
        // call login API here
        setErrorMessage('Incorrect Password TEST');
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
