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
                            <div className='col text-center'>
                                <h5>My photos</h5>
                                <UploadPost />
                            </div>
                            <PopulateData url={MYPROFILE_API} pagetype={PAGE_TYPE}/>
                        </div>)
                        ||
                        <LandingPage />
                    }
                </div>;
    }
}

export default MyProfile;