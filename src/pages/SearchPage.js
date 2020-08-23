import React from 'react';


function SearchPage(props){
    console.log(props.match.params.pattern);
    var search_url = 'http://127.0.0.1:8000/api/search/'+ props.match.params.pattern;
    return <div>
        <h1>Search result</h1>
        Calling search component and populate result here
    </div>;
}

export default SearchPage;