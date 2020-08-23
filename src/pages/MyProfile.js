import React from 'react';
import PopulateData from '../components/PopulateData';


class MyProfile extends React.Component{
    render(){
        var myprofile_url = 'http://127.0.0.1:8000/api/getuserposts/'+localStorage.loggedinUser;
        return <div>
                <h1>This is MyProfile page </h1>
                <PopulateData url={myprofile_url} pagetype='myprofile'/>
        </div>;
    }
}

export default MyProfile;