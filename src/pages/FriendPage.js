import React from 'react';
import PopulateData from '../components/PopulateData';
import {API} from '../components/Global';
import NaivgationBar from '../components/NavigationBar';
import LandingPage from '../pages/LandingPage';

class FriendPage extends React.Component{
    render(){
            var friend_url = API + 'getuserposts/'+ this.props.match.params.username;
            return <div>
                        { localStorage.auth_token !== undefined && 
                            <div>
                                <NaivgationBar />
                                <div className='row center'>
                                    <h5>Photos of {this.props.match.params.username}</h5>
                                </div>
                                <PopulateData url={friend_url} pagetype='friend'/>
                            </div>
                        ||                        
                            <LandingPage />
                        }
                    </div>;
        }

}

export default FriendPage;