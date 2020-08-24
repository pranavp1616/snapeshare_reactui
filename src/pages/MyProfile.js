import React from 'react';
import PopulateData from '../components/PopulateData';
import NaivgationBar from '../components/NavigationBar';
import {API} from '../components/Global';
import LandingPage from '../pages/LandingPage';

class MyProfile extends React.Component{
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
        const resp = await fetch(request);
        const data = await resp.json();
        window.location.reload();
    }

    render(){
        var myprofile_url = API+ 'getuserposts/'+localStorage.loggedinUser;
        return <div>
                    { localStorage.auth_token != undefined && 
                        <div>
                            <NaivgationBar />
                            <h1>This is MyProfile page </h1>
                            <div>
                            <input type="text" id='upload_input_hashtag'/> 
                            <input type="file" id='upload_input_file' accept='image/*'/> 
                            <button onClick={this.uploadPostLogic}>Post</button>
                            </div>
                            <br/>
                            <PopulateData url={myprofile_url} pagetype='myprofile'/>
                        </div>
                    ||
                        <LandingPage />
                    }
                </div>;
    }
}

export default MyProfile;