import React from 'react';
import PopulateDataPage from '../pages/PopulateDataPage';
import {API} from '../components/Global';
import NaivgationBar from '../components/NavigationBar';
import LandingPage from '../pages/LandingPage';

function Home(){
    var home_url = API + 'home-feed/';
    return <div>
                { (localStorage.auth_token !== undefined && 
                    <div>
                        <NaivgationBar />                            
                        <PopulateDataPage url={home_url} pagetype='home'/>
                    </div>)
                    ||
                    <LandingPage />
                }
            </div>
}

export default Home;