import React from 'react';
import PopulateData from '../components/PopulateData';
import {API} from '../components/Global';

class MyProfile extends React.Component{
    constructor(props){
        super(props);
        this.uploadPostLogic = this.uploadPostLogic.bind(this);
    }

    async uploadPostLogic(){
        alert('test');
        this.forceUpdate(); // to rerender after upload
    }

    render(){
        var myprofile_url = API+ 'getuserposts/'+localStorage.loggedinUser;
        return <div>
                <h1>This is MyProfile page </h1>
    
                <div>
                <input type="text" required/> 
                <input type="file"accept='image/*' required/> 
                <button onClick={this.uploadPostLogic}>Post</button>
                </div>
    
                <br/>
                <PopulateData url={myprofile_url} pagetype='myprofile'/>
        </div>;
    }
}

export default MyProfile;