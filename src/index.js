import React from 'react';
import ReactDOM from 'react-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/HomePage';
import MyProfile from './pages/MyProfile';

import {Route,BrowserRouter as Router} from 'react-router-dom';

/*
var myjsx = <div>
                <LoginPage />
                <RegisterPage />
                <Home />
                <MyProfile />
            </div>
*/

var myjsx = <Router>
                <div> 
                    <a href='/login'>Login</a>
                    <a href='/register'>Register</a>
                    <a href='/home'>Home</a>
                    <a href='/myprofile'>Myprofile</a>
                </div>
                <Route path='/' exact component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/login' component={LoginPage} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/myprofile' component={MyProfile} />
            </Router>
    
ReactDOM.render(myjsx,document.getElementById('root'));