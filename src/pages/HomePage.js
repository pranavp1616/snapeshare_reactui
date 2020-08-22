import React from 'react';
import PopulateData from '../components/PopulateData';


function Home(){
    return <div>
        <h1>This is home page </h1>
        <PopulateData url='http://127.0.0.1:8000/api/home-feed/' pagetype='home'/>
    </div>;
}

export default Home;