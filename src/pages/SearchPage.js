import React from 'react';
import {API} from '../components/Global';

class SearchPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {search_result_data: [] };
        this.foo = this.foo.bind(this);
    }

    async componentDidMount(){
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var url = API + 'search/'+this.props.match.params.pattern;
        var request = new Request(url, {method:'GET', headers});
        
        const resp = await fetch(request);
        const data = await resp.json();
        console.log(data);
        console.log(this.state.main_data)
        this.setState(  {   search_result_data : data    }   );
    }

    render() {
        return (
                <div>
                    <h1>Search result for {this.props.match.params.pattern}</h1>
                    {this.state.search_result_data.map(this.foo)}
                </div>
                );
    }
    foo(t){
        var temp_url = '/friend/'+t.username;
        return <div>
                    <a href={temp_url}>{t.username}</a>
                    <br/>
            </div>
    }
}

export default SearchPage;