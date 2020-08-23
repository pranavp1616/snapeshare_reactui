import React from 'react';
import PopulateData from '../components/PopulateData';


class FriendPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
            console.log(this.props.match.params.username);
            var friend_url = 'http://127.0.0.1:8000/api/getuserposts/'+ this.props.match.params.username;
            return <div>
                         <h1>FriendPage page </h1>
                        <PopulateData url={friend_url} pagetype='friend'/>
                    </div>;
        }

}

export default FriendPage;