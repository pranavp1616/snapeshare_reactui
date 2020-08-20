import React from 'react';
import ReactDOM from 'react-dom';

import PhotoPost from './components/PhotoPost'

var myjsx= <div>
                Home
                <PhotoPost uploaded_by='a'/>
                <PhotoPost uploaded_by='b'/>
                <PhotoPost uploaded_by='c'/>
            </div>;
    
ReactDOM.render(myjsx,document.getElementById('root'));