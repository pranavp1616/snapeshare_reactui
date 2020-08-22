import React from 'react';
import PopulateData from '../components/PopulateData';


function Home(){
    return <div>
        <h1>This is home page </h1>
        <PopulateData url='api/home/' pagetype='home'/>
    </div>;
}

export default Home;