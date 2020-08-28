import React from 'react';
import {API} from './Global';

class UploadPost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image_src : '',
            hashtags : ''
        }
        this.uploadPostLogic = this.uploadPostLogic.bind(this);
        this.handleInputFileChange = this.handleInputFileChange.bind(this);
    }

    async uploadPostLogic(){
        var url = API +'photopost/create/';
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var formData = new FormData();  
        formData.append('image',this.state.image_src);  
        formData.append('hashtags',this.state.hashtags);
        var request = new Request(url, {method:'POST', headers, body:formData}  );
        await fetch(request);
        window.location.reload();
    }

    handleInputFileChange(e){
        this.setState({image_src:e.target.files[0]})
    }

    render(){
        return (
                <div className='container center' style={{maxWidth: '700px'}}>
                    <div className='card hoverable'>
                        <div className='card-content'>
                            <div className="file-field input-field">
                                <div className="btn indigo">
                                    <span>browse</span>
                                    <input type="file" onChange={this.handleInputFileChange} accept="image/*"/>
                                </div>
                                <div class = "file-path-wrapper">
                                    <input class = "file-path validate" type = "text" placeholder = "Selected file" />
                                </div>
                            </div>
                            <input type="text" onChange={ e => this.setState({ hashtags : e.target.value})} placeholder='hashtags?'/> 
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