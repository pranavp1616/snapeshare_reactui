import React from 'react';
import PopulateData from '../components/PopulateData';
import {API} from '../components/Global';
import NaivgationBar from '../components/NavigationBar';
import LandingPage from '../pages/LandingPage';

class FriendPage extends React.Component{
    render(){
            const FRIEND_API = API + 'friend/'+ this.props.match.params.username+'/';
            const PAGE_TYPE = 'friend';
            return <div>
                        {   (localStorage.auth_token !== undefined && 
                            <div>
                                <NaivgationBar />
                                <h5>Photos of {this.props.match.params.username}</h5>
                                <PopulateData url={FRIEND_API} pagetype={PAGE_TYPE}/>
                            </div>)
                            ||                        
                            <LandingPage />
                        }
                    </div>;
    }
}

export default FriendPage;