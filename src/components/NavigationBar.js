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
                    <div className="navbar-fixed">
                        <nav className="nav-wrapper indigo">
                            <div className="container">
                                <div className="left">  
                                    <b>Snapshare</b>
                                </div>
                                <ul className="right">
                                    <li>    <input  onChange={  (e) => this.setState({search_box_value:e.target.value}) }
                                                    className='white-text'
                                                    type='text'/>   </li>
                                    <li>    <div 
                                            onClick={(e)=>{
                                                            if(this.state.search_box_value===''){
                                                                window.location='/search/null';
                                                            }
                                                            else
                                                                window.location='/search/'+this.state.search_box_value;                                                        
                                                        }
                                                    }>
                                            <i className="material-icons indigo">search</i>
                                            </div>
                                            </li>
                                    <li>    <a href='/home'>home</a>    </li>
                                    <li>    <a href='/myprofile'> hi {localStorage.loggedinUser}! </a> </li>
                                    <li>    <a href='/logout'>logout</a>    </li>                            
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
    }
}

export default NaivgationBar;