import React from 'react';
import PopulateData from '../components/PopulateData';
import {API} from '../components/Global';
import NaivgationBar from '../components/NavigationBar';
import PleaseLoginPage from '../components/PleaseLoginPage';

class FriendPage extends React.Component{
    render(){
            console.log(this.props.match.params.username);
            var friend_url = API + 'getuserposts/'+ this.props.match.params.username;

            return <div>
                        { localStorage.auth_token != undefined && 
                            <div>
                                <NaivgationBar />
                                <h1>FriendPage page </h1>
                                <PopulateData url={friend_url} pagetype='friend'/>
                            </div>
                        ||                        
                            <PleaseLoginPage />
                        }
                    </div>;
        }

}

export default FriendPage;