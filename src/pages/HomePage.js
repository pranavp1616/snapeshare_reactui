import React from 'react';
import PopulateData from '../components/PopulateData';
import {API} from '../components/Global';
import NaivgationBar from '../components/NavigationBar';
import LandingPage from '../pages/LandingPage';

function Home(){
    var temp_url = API + 'home-feed/';
    return <div>
                { localStorage.auth_token != undefined && 
                    <div>
                        <NaivgationBar />
                        <h1>This is home page </h1>
                        <PopulateData url={temp_url} pagetype='home'/>
                    </div>
                    ||
                    <LandingPage />
                }
            </div>
}

export default Home;