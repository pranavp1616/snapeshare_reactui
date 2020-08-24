import React from 'react';
import {Modalstyle} from './Global'
import {API} from './Global';

class ModalAllComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all_comments : []
        }
        this.foo = this.foo.bind(this);
        this.deleteCommentLogic = this.deleteCommentLogic.bind(this);
    }
    async componentDidMount(){
        var url = API + 'getcomments/'+this.props.post_id;
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(url,  {  method:'GET',headers }   );
        var resp = await fetch(request);
        var data = await resp.json();
        var temp_array = data.map(  (e) => { 
                                            var obj = {
                                                    id:e.id, 
                                                    username:e.username,
                                                    comment:e.comment,
                                                    date_created:e.date_created,
                                                };
                                            return obj;
                                        });
        console.log(temp_array);
        this.setState({all_comments:temp_array});
    }

    async deleteCommentLogic(id){
        // call delete comment api here
        const temp_array = this.state.all_comments.filter(item => item.id !== id);
        this.setState({all_comments:temp_array});
    }

    render() {
        return (
             <div>
                    <div className='container' style={Modalstyle}>
                        <div className='card' style={{marginTop:'100px', marginLeft:'10%', marginRight:'10%'}}>
                            <div className='card-content'>
                                <div className='center'>
                                    <button onClick={this.props.onClose} className='btn'>x</button>
                                </div>
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
                        <i className='grey-text'>{t.date_created}</i>
                        { localStorage.loggedinUser === t.username
                            &&
                            <div onClick={this.deleteCommentLogic.bind(this, t.id)} className='right'>
                                <i class="material-icons">delete</i>
                            </div>
                        }

                        <p>
                            {t.comment}
                        </p>
                    </div>
                </li>
        }
}

export default ModalAllComments;