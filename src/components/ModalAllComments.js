import React from 'react';
import {Modalstyle} from './Global'
import {API} from './Global';

class ModalAllComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all_comments : []
        }
    }
    async componentDidMount(){
        var url = API + 'getcomments/'+this.props.post_id;
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(url,  {  method:'GET',headers }   );
        var resp = await fetch(request);
        var data = await resp.json();
        var temp_array = data.map(  (e) => { 
                                            var obj = { username:e.username,
                                                    comment:e.comment,
                                                    date_created:e.date_created,
                                                };
                                            return obj;
                                        });
        console.log(temp_array);
        this.setState({all_comments:temp_array});
    }

    render() {
        return (
             <div>
                    <div className='container' style={Modalstyle}>
                        <div className='card' style={{marginTop:'100px', marginLeft:'10%', marginRight:'10%'}}>
                            <div className='card-content'>
                                <button onClick={this.props.onClose} className='btn'>x</button>
                                    <ul className="collection with-header">
                                        {this.state.all_comments.map(this.foo)}
                                    </ul>
                            </div>
                        </div>
                    </div>
             </div>
        );
    }
    
    foo(t){
        return  <li className="collection-item">
                    <div>
                        <a href={'/friend/'+t.username}>    {t.username}    </a>
                        <p>
                            {t.comment}
                            <div className='right'>
                                <i class="material-icons">delete</i>
                            </div>
                        </p>
                    </div>
                </li>
        }
}

export default ModalAllComments;