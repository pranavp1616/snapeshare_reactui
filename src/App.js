import React from 'react';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/HomePage';
import MyProfile from './pages/MyProfile';
import SearchPage from './pages/SearchPage';
import FriendPage from './pages/FriendPage';

import {Route,BrowserRouter as Router} from 'react-router-dom';


class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            search_box_value : ''
        }
    }

    render(){
        return (<Router>
                    <div> 
                        <a href='/login'>Login</a>
                        <a href='/register'>Register</a>
                        <a href='/home'>Home</a>
                        <a href='/myprofile'>Myprofile</a>

                        <input  onChange={  (e) => this.setState({search_box_value:e.target.value}) }
                                type='text'/>
                        <button onClick={(e)=>{ window.location='/search/'+this.state.search_box_value; }   }>Search</button>

                        <br/>
                    </div>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/myprofile' component={MyProfile} />
                    <Route path='/search/:pattern' component={SearchPage} />
                    <Route path='/friend/:username' component={FriendPage}/>
                    
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                </Router>);
    }

}

export default App;