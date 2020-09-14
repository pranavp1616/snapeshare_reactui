import React from 'react';
import '../App.css';

class NaivgationBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search_box_value : ''
        }
    }

    render(){
        return <div>
                <nav className='navbar navbar-custom navbar-expand-md fixed-top'> 
                    <div class="navbar-brand"><h2>snapshare</h2></div>

                    <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <i class="fa fa-bars" aria-hidden="true" style={{color:'white'}}></i>
                    </button>
    
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav mx-auto">
                            <li className='nav-item form-inline'>
                                <input  onChange={ (e) => this.setState({search_box_value:e.target.value}) }
                                        type='text'
                                        className='form-control mr-sm-2'/>   
                            </li>
                            <li className='nav-item form-inline'>
                                <button onClick={(e)=>{
                                                    if(this.state.search_box_value===''){
                                                        window.location='/search/null';
                                                    }
                                                    else
                                                        window.location='/search/'+this.state.search_box_value;                                                        
                                                }
                                } class='btn'>
                                    <span className='fa fa-search fa-lg' style={{color:'white'}} aria-hidden='true'></span>
                                </button>
                            </li>
                            <li className='nav-item'><a href='/home' class='nav-link'><b>home</b></a></li>
                            <li className='nav-item'><a href='/myprofile' class='nav-link'><b>hi {localStorage.loggedinUser}</b></a></li>
                            <li className='nav-item'><a href='/logout' class='nav-link'><b>logout</b></a></li>
                        </ul>
                    </div>
                
                </nav>
                <div  style={{marginTop:'80px'}}></div>                         
                </div>
    }
}

export default NaivgationBar;