import React from 'react';

import Home from './pages/HomePage';
import MyProfile from './pages/MyProfile';
import SearchPage from './pages/SearchPage';
import FriendPage from './pages/FriendPage';
import LogoutPage from './pages/LogoutPage';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';

import {Route,BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
    render(){
        return (<Router>
                        <Route exact path='/' component={LandingPage}/>
                        <Route path='/login' component={LandingPage}/>                   
                        <Route path='/register' component={RegisterPage}/>
                        <Route path='/home' component={Home} />
                        <Route path='/myprofile' component={MyProfile} />
                        <Route path='/search/:pattern' component={SearchPage} />
                        <Route path='/friend/:username' component={FriendPage}/>
                        <Route path='/logout' component={LogoutPage}/>
                </Router>);
    }
}

export default App;