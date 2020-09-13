import React from 'react';
import PopulateData from '../components/PopulateData';
import {API} from '../components/Global';
import NaivgationBar from '../components/NavigationBar';
import LandingPage from '../pages/LandingPage';

function Home(){
    const HOME_API = API + 'home-feed/';
    const PAGE_TYPE = 'home';
    return <div>
                {   (localStorage.auth_token !== undefined && 
                    <div>
                        <NaivgationBar />                            
                        <PopulateData url={HOME_API} pagetype={PAGE_TYPE}/>
                    </div>)
                    ||
                    <LandingPage />
                }
            </div>
}

export default Home;