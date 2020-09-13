import React from 'react';
import {API} from './Global';
import '../App.css';

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
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        
        var request = new Request(API + 'comment/'+this.props.post_id,  {  method:'GET',headers }   );
        var resp = await fetch(request);
        var data = await resp.json();

        var temp_array = [{'id':'12','username':'pranav','comment':'abcd','date_created':'10/10/10'}]
        this.setState({all_comments:temp_array});
    }

    async deleteCommentLogic(id){
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);

        var request = new Request(API + 'comment/delete/'+id,  {  method:'DELETE',headers }   );
        await fetch(request);

        const temp_array = this.state.all_comments.filter(item => item.id !== id);
        this.setState({all_comments:temp_array});
    }

    render() {
        return  <div>
                    <div className='modalstyle'>
                        <div style={{marginTop:'100px', marginLeft:'10%', marginRight:'10%'}}>
                            <button onClick={this.props.onClose} className='btn btn-primary'>x</button>
                            <b>All comments</b>
                            <ul>{this.state.all_comments.map(this.foo)}</ul>
                        </div>
                    </div>
                </div>
    }
    
    foo(t){
        return  <li>
                    <a href={'/friend/'+t.username}>{t.username}</a>
                    {t.date_created}
                    {   localStorage.loggedinUser === t.username
                        &&
                        <div onClick={this.deleteCommentLogic.bind(this, t.id)}>delete</div>
                    }
                    {t.comment}
                </li>
        }
}

export default ModalAllComments;