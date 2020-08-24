import React from 'react';

class NaivgationBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search_box_value : ''
        }
    }

    render(){
        return <div> 
                <div class="navbar-fixed">
                    <nav class="nav-wrapper indigo">
                        <div class="container">
                            <div class="left">  
                                Snapshare   
                            </div>
                            <ul class="right">
                            <li>    <input  onChange={  (e) => this.setState({search_box_value:e.target.value}) }
                                            type='text'/>   </li>
                            <li>    <button 
                                    onClick={(e)=>{ window.location='/search/'+this.state.search_box_value; }   }>
                                    search
                                    </button>
                                    </li>
                            <li>    <a href='/home'>home</a>    </li>
                            <li>    <a href='/myprofile'> hi {localStorage.loggedinUser}! </a> </li>
                            <li>    <a href='/logout'>logout</a>    </li>                            
                            </ul>
                        </div>
                    </nav>
                </div>


                <br/>
            
            </div>
    }
}

export default NaivgationBar;