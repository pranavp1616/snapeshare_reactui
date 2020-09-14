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
        this.setState({all_comments:data});
    }

    async deleteCommentLogic(cmnt_id){
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);

        var request = new Request(API + 'comment/'+this.props.post_id+'/delete/'+cmnt_id,  {  method:'DELETE',headers }   );
        await fetch(request);

        const temp_array = this.state.all_comments.filter(item => item.key !== cmnt_id);
        this.setState({all_comments:temp_array});
    }

    render() {
        return  <div>
                    <div className='modalstyle'>
                        <div style={{marginTop:'100px', width:'1000px'}}>
                            <div className='card'>
                                <div className='container text-center'>
                                <div className='row' style={{marginTop:'20px'}}>
                                        <div className='col'>
                                            <button onClick={this.props.onClose} className='btn btn-danger'>x</button>
                                        </div>
                                    </div>
                                    <div className='row' style={{marginTop:'10px'}}>
                                        <div className='col'>
                                            <b>All comments</b>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <ul>{this.state.all_comments.map(this.foo)}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    }


    foo(t){
        var d = new Date(t.value.date_created);
        const date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
        return  <li>
                    <div className='row'>
                        <div className='col-lg-2'>
                            <b><a href={'/friend/'+t.value.username}>{t.value.username}</a></b>
                        </div>
                        <div className='col-lg-2'>
                            <i style={{color:'grey'}}>{date}</i>
                        </div>
                        <div className='col-lg-4'>
                            {t.value.comment}
                        </div>
                        <div className='col-lg-1'>
                            {   localStorage.loggedinUser === t.value.username
                                &&
                                <div onClick={this.deleteCommentLogic.bind(this, t.key)}>
                                    <i  style={{color:'red'}} className='fa fa-trash-o fa-lg'></i>
                                </div>
                            }
                        </div>
                    </div>
                </li>
        }
}

export default ModalAllComments;