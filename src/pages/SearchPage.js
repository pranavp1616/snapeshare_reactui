import React from 'react';
import {API} from '../components/Global';
import NaivgationBar from '../components/NavigationBar';
import LandingPage from '../pages/LandingPage';

class SearchPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {search_result_data: [] };
        this.foo = this.foo.bind(this);
    }

    async componentDidMount(){
        if(this.props.match.params.pattern !== 'null'){
            var headers = new Headers();
            headers.append('Authorization','Token '+localStorage.auth_token);
            var url = API + 'search/'+this.props.match.params.pattern;
            var request = new Request(url, {method:'GET', headers});
            const resp = await fetch(request);
            const data = await resp.json();
            this.setState(  {   search_result_data : data    }   );            
        }
    }

    render() {
        return (
                <div>
                    { (localStorage.auth_token !== undefined && 
                        <div>
                                        <NaivgationBar />
                                        <ul>
                                            <li>  
                                                Search results for <b>{this.props.match.params.pattern}</b> 
                                            </li>
                                            {this.state.search_result_data.map(this.foo)}
                                        </ul>
                        </div>)
                    ||
                        <LandingPage/>
                    }
                </div>
                );
    }
    foo(t){
        return <li>
                    <a href={'/friend/'+t.username}>{t.username}</a>        
                </li>
    }
}

export default SearchPage;