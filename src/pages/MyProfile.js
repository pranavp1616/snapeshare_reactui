import React from 'react';
import PopulateData from '../components/PopulateData';


function MyProfile(){
    return <div>
        <h1>This is MyProfile page </h1>
        <PopulateData url='api/myprofile/' pagetype='myprofile'/>
    </div>;
}

export default MyProfile;