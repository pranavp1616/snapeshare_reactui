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

        // fix this = data is not an array but a map
        var temp_array = ['dummydata-1','dummydata-2'];
        this.setState({all_likes:temp_array});
    }

    render() {
        return (
             <div>
                <div className='modalstyle'>
                    <div style={{marginTop:'100px', marginLeft:'10%', marginRight:'10%'}}>
                        <button onClick={this.props.onClose} className='btn btn-primary'>x</button>
                        <b>All likes</b>
                        <ul>{this.state.all_likes.map(this.foo)}</ul>
                    </div>
                </div>
             </div>
        );
    }

    foo(t){
        return <li><a href={'/friend/'+t}>{t}</a></li>
    }
}

export default ModalAllLikes;