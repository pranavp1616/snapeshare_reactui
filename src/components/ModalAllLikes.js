import React from 'react';
import {API} from './Global';
import '../App.css';

class ModalAllLikes extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            all_likes : []
        }
    }

    async componentDidMount(){
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);

        var request = new Request(API + 'like/'+this.props.post_id,  {  method:'GET',headers }   );
        var resp = await fetch(request);
        var data = await resp.json();
        this.setState({all_likes:data});
    }

    render() {
        return (
             <div>
                <div className='modalstyle'>
                    <div style={{marginTop:'100px', width:'500px'}}>
                        <div className='card'>
                            <div className='container text-center'>
                            <div className='row'  style={{marginTop:'20px'}}>
                                    <div className='col'>
                                        <button onClick={this.props.onClose} className='btn btn-danger'>x</button>
                                    </div>
                                </div>
                                <div className='row'  style={{marginTop:'10px'}}>
                                    <div className='col'>
                                        <b>All likes</b>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <ul>{this.state.all_likes.map(this.foo)}</ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        );
    }

    foo(t){
        return <li><a href={'/friend/'+t.key}>{t.key}</a></li>
    }
}

export default ModalAllLikes;