import React from 'react';
import ReactDOM from 'react-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/HomePage';
import MyProfile from './pages/MyProfile';

var myjsx = <div>
                <LoginPage />
                <RegisterPage />
                <Home />
                <MyProfile />
            </div>  
    
ReactDOM.render(myjsx,document.getElementById('root'));