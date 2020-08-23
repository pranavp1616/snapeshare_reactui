import React from 'react';
import PopulateData from '../components/PopulateData';


function FriendPage(props){
    var friend_url = 'http://127.0.0.1:8000/api/getuserposts/'+ props.friend_name;
    return <div>
        <h1>FriendPage page </h1>
        <PopulateData url={friend_url} pagetype='friend'/>
    </div>;
}

export default FriendPage;