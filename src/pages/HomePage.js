import React from 'react';
import PopulateData from '../components/PopulateData';
import {API} from '../components/Global';

function Home(){
    var temp_url = API + 'home-feed/';
    return <div>
        <h1>This is home page </h1>
        <PopulateData url={temp_url} pagetype='home'/>
    </div>;
}

export default Home;