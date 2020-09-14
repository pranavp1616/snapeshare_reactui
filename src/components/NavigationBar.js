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
                <nav className='navbar navbar-custom navbar-expand-sm fixed-top'> 
                    <a class="navbar-brand" href="#">snapshare</a>
                    <ul className='navbar-nav mx-auto'>
                        <li className='nav-item'><a href='/home' class='nav-link'>home</a></li>
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
                        <li className='nav-item'><a href='/myprofile' class='nav-link'> hi {localStorage.loggedinUser}!</a></li>
                        <li className='nav-item'><a href='/logout' class='nav-link'>logout</a></li>
                    </ul>

                </nav>
                <div  style={{marginTop:'80px'}}></div>                         
                </div>
    }
}

export default NaivgationBar;