import React from 'react';

class NaivgationBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search_box_value : ''
        }
    }

    render(){
        return <nav className='navbar navbar-expand-sm bg-light fixed-top'> 
                    <ul className='navbar-nav'>
                        <a class="navbar-brand" href="#">snapshare</a>
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
                                <span className='fa fa-search fa-lg' aria-hidden='true'></span>
                            </button>
                        </li>
                        <li className='nav-item'><a href='/home' class='nav-link'>home</a></li>
                        <li className='nav-item'><a href='/myprofile' class='nav-link'> hi {localStorage.loggedinUser}!</a></li>
                        <li className='nav-item'><a href='/logout' class='nav-link'>logout</a></li>
                    </ul>

                </nav>
    }
}

export default NaivgationBar;