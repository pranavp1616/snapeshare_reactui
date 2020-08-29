import React from 'react';
import PopulateDataPage from '../pages/PopulateDataPage';
import NaivgationBar from '../components/NavigationBar';
import {API} from '../components/Global';
import LandingPage from '../pages/LandingPage';
import UploadPost from '../components/UploadPost';

class MyProfile extends React.Component{
    render(){
        var myprofile_url = API+ 'getuserposts/'+localStorage.loggedinUser+'/';
        return <div>
                    { (localStorage.auth_token !== undefined && 
                        <div>
                            <NaivgationBar />
                            <div className='row center'>
                                    <h5>My photos</h5>
                            </div>
                            <UploadPost />
                            <PopulateDataPage url={myprofile_url} pagetype='myprofile'/>
                        </div>)
                    ||
                        <LandingPage />
                    }
                </div>;
    }
}

export default MyProfile;