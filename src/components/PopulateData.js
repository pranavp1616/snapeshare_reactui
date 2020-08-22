import React, {useEffect} from 'react';
import PhotoPost from './PhotoPost';

function PopulateData(props){

    // CHANGE below variables to STATE variables (hook type)
    var url = props.url;
    var pagetype = props.pagetype;
    var main_data = '';
    
    useEffect(() => {
        fetchData();
    });

    async function fetchData(){
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(url, {method:'GET', headers});
        var resp = await fetch(request);
        main_data = await resp.json();
        console.log(main_data);
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