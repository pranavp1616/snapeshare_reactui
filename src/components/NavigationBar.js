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
                    <div>  
                        <b>Snapshare</b>
                    </div>
                    <ul>
                        <li>    <input  onChange={  (e) => this.setState({search_box_value:e.target.value}) }
                            type='text'/>   
                        </li>
                        <li>
                            <div 
                                onClick={(e)=>{
                                if(this.state.search_box_value===''){
                                window.location='/search/null';
                                }
                                else
                                window.location='/search/'+this.state.search_box_value;                                                        
                                }
                                }>
                                <i>search</i>
                            </div>
                        </li>
                        <li>    <a href='/home'>home</a>    </li>
                        <li>    <a href='/myprofile'> hi {localStorage.loggedinUser}! </a> </li>
                        <li>    <a href='/logout'>logout</a>    </li>
                    </ul>
                </div>
    }
}

export default NaivgationBar;