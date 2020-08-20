import React from 'react';
import ReactDOM from 'react-dom';

import PhotoPost from './components/PhotoPost'

var myjsx= <div>
                Home
                <PhotoPost />
                <PhotoPost />
                <PhotoPost />
            </div>;
    
ReactDOM.render(myjsx,document.getElementById('root'));