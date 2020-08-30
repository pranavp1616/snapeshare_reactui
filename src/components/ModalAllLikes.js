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
        var url = API + 'getlikes/'+this.props.post_id;
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(url,  {  method:'GET',headers }   );
        var resp = await fetch(request);
        var data = await resp.json();
        var temp_array = data.map((e)=> e.username);
        console.log(temp_array);
        this.setState({all_likes:temp_array});
    }

    render() {
        return (
             <div>
                    <div className='container center' style={Modalstyle}>
                        <div className='card' style={{marginTop:'100px', marginLeft:'10%', marginRight:'10%'}}>
                            <div className='card-content'>
                                <button onClick={this.props.onClose} className='btn indigo'>x</button>
                                <p><b>All likes</b></p>
                                <ul class="collection  with-header">
                                    {this.state.all_likes.map(this.foo)}
                                </ul>
                            </div>
                        </div>
                    </div>
             </div>
        );
    }
    foo(t){
        return <li className="collection-item"> <a href={'/friend/'+t}> {t} </a></li>
    }
}

export default ModalAllLikes;