import React from 'react';
import ReactDOM from 'react-dom';

import PhotoPost from './components/PhotoPost'
import {LoginPage, RegisterPage} from './pages/LoginRegisterPage'


var myjsx = <div>
                <LoginPage />
                <RegisterPage />
                <PhotoPost uploaded_by='a'/>
                <PhotoPost uploaded_by='a'/>
            </div>  
    
ReactDOM.render(myjsx,document.getElementById('root'));