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
                <a href='/home'>Home</a>
                <a href='/myprofile'>Myprofile</a>

                <input  onChange={  (e) => this.setState({search_box_value:e.target.value}) }
                        type='text'/>
                <button onClick={(e)=>{ window.location='/search/'+this.state.search_box_value; }   }>Search</button>
                <a href='/logout'>Logout</a>
                <br/>
            </div>
    }
}

export default NaivgationBar;