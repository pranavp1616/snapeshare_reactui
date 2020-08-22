import React, {useEffect} from 'react';
import PhotoPost from './PhotoPost';
import {USER_AUTH_TOKEN} from './Global';

function PopulateData(props){

    // CHANGE below variables to STATE variables (hook type)
    var url = props.url;
    var pagetype = props.pagetype;
    var main_data = '';
    
    useEffect(() => {
        console.log('mounted');
        // BUG - twice this function is executed  - ie twice the fetch on same API
        fetchData();
    });

    async function fetchData(){
        alert('fetching data from API');
        var headers = new Headers();
        headers.append('Authorization','Token '+USER_AUTH_TOKEN);
        var request = new Request('http://127.0.0.1:8000/api/home-feed/', {method:'GET', headers});
        var resp = await fetch(request);
        var data = await resp.json();
        // main_data = data;
    }
    
    return <div>
        Populated posts from <b>{url}</b> and pagetype is <b>{pagetype}</b>
        <br/>
                <PhotoPost uploaded_by='a'/>
                <PhotoPost uploaded_by='a'/>
        <br/>
    </div>
}

export default PopulateData;