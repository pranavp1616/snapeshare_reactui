import React from 'react';
import PopulateData from '../components/PopulateData';


function MyProfile(){
    return <div>
        <h1>This is MyProfile page </h1>
        <PopulateData url='http://127.0.0.1:8000/api/getuserposts/admin' pagetype='myprofile'/>
    </div>;
}

export default MyProfile;