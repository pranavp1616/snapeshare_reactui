import React from 'react';
import {Modalstyle} from './Global'
import {API} from './Global';

class ModalAllLikes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all_likes : []
        }
    }
    async componentDidMount(){
        var url = API + 'like/'+this.props.post_id;
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(url,  {  method:'GET',headers }   );
        var resp = await fetch(request);
        var data = await resp.json();
        // fix this = data is not an array but a map
        var temp_array = ['pranav','admin'];
        console.log(temp_array);
        this.setState({all_likes:temp_array});
    }

    render() {
        return (
             <div>
                <div style={Modalstyle}>
                    <div style={{marginTop:'100px', marginLeft:'10%', marginRight:'10%'}}>
                                <button onClick={this.props.onClose}>x</button>
                                <p><b>All likes</b></p>
                                <ul>
                                    {this.state.all_likes.map(this.foo)}
                                </ul>
                        </div>
                    </div>
             </div>
        );
    }
    foo(t){
        return <li> <a href={'/friend/'+t}> {t} </a></li>
    }
}

export default ModalAllLikes;