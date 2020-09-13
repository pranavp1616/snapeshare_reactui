import React from 'react';
import PopulateData from '../components/PopulateData';
import NaivgationBar from '../components/NavigationBar';
import {API} from '../components/Global';
import LandingPage from '../pages/LandingPage';
import UploadPost from '../components/UploadPost';

class MyProfile extends React.Component{
    render(){
        const MYPROFILE_API = API+ 'myprofile/';
        const PAGE_TYPE = 'myprofile';
        return <div>
                    {   (localStorage.auth_token !== undefined && 
                        <div>
                            <NaivgationBar />
                            My photos
                            <UploadPost />
                            <PopulateData url={MYPROFILE_API} pagetype={PAGE_TYPE}/>
                        </div>)
                        ||
                        <LandingPage />
                    }
                </div>;
    }
}

export default MyProfile;