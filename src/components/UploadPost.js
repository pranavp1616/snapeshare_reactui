import React from 'react';
import {API} from './Global';

class UploadPost extends React.Component{
    constructor(props){
        super(props);
        this.uploadPostLogic = this.uploadPostLogic.bind(this);
    }

    async uploadPostLogic(){
        // change this direct DOM access through document  to state later
        var image = document.getElementById('upload_input_file').files[0];
        var hashtags = document.getElementById('upload_input_hashtag').value;

        var url = API +'photopost/create/';
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var formData = new FormData();  
        formData.append('image',image);  
        formData.append('hashtags',hashtags);
        var request = new Request(url, {method:'POST', headers, body:formData}  );
        await fetch(request);
        window.location.reload();
    }

    render(){
        return (
                <div className='container center' style={{maxWidth: '700px'}}>
                    <div className='card hoverable'>
                        <div className='card-content'>
                            <div className="file-field input-field">
                                <div className="btn indigo">
                                    <span>browse</span>
                                    <input type="file" id='upload_input_file' accept="image/*"/>
                                </div>
                                <div class = "file-path-wrapper">
                                    <input class = "file-path validate" type = "text" placeholder = "Selected file" />
                                </div>
                            </div>
                            <input type="text" id='upload_input_hashtag' placeholder='hashtags?'/> 
                            <button onClick={this.uploadPostLogic}
                                            className='btn indigo'>
                                            Post
                            </button>
                        </div>
                    </div>
                </div>
        );
    }
}

export default UploadPost;