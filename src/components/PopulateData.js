import React from 'react';
import {API} from './Global';
import LikeButton from './LikeButton';
import ModalAllLikes from './ModalAllLikes';
import ModalAllComments from './ModalAllComments';

class PopulateData extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {  
                        main_data : [], 
                        comment:'',
                        LikesModalOpen : false,
                        LikesModalPostIdPassed : 0,
                        CommentModalOpen : false,
                        CommentModalPostIdPassed : 0,
                    };
        this.foo = this.foo.bind(this);
        this.onNextPageBtnClick = this.onNextPageBtnClick.bind(this);
        this.onPrevPageBtnClick = this.onPrevPageBtnClick.bind(this);
        this.pageNumber = 1;
    }

    async componentDidMount(){
        this.pageNumber = 1;
        this.fetchMainData();
    }   
    
    onNextPageBtnClick(){
        this.pageNumber++;
        this.fetchMainData();
    }

    onPrevPageBtnClick(){
        this.pageNumber--;
        if(this.pageNumber <= 0) 
            this.pageNumber = 1;
        this.fetchMainData();
    }

    async fetchMainData(){
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(this.props.url+'page/'+this.pageNumber, {method:'GET', headers});
        const resp = await fetch(request);
        const data = await resp.json();
        this.setState(  {   main_data : data    }   );
    }

    async likeLogic(id){
        var url = API+'like/'+id;
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(url, {method:'POST',headers});
        var resp = await fetch(request);
        var data = await resp.json();
        const n = this.state.main_data.length; 
        var i=0, index=-1;
        for(i=0;i<n;i++){
            if(this.state.main_data[i].id === id)
                index = i;
        }
        var newMainData;
        if(data.message === 'liked'){
                    newMainData = [...this.state.main_data];
                    newMainData[index].is_liked = true;
                    newMainData[index].totalLikes++;
                    this.setState({ main_data : newMainData });
        }
        else{
                    newMainData = [...this.state.main_data];
                    newMainData[index].is_liked = false;
                    newMainData[index].totalLikes--;
                    this.setState({ main_data : newMainData });
        }
    }

    async commentLogic(id){
        const new_comment = this.state.comment;
        this.setState({comment:''}); // otherwise for other posts it might call API with old comment
        var url = API+'comment/'+id;
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var formData = new FormData();
        formData.append('comment',new_comment);
        var request = new Request(url, {method:'POST',headers, body:formData});
        var resp = await fetch(request);
        var data = await resp.json();
        if(data.response === 'success'){
            alert('Comment added');
            const n = this.state.main_data.length; 
            var i=0, index=-1;
            for(i=0;i<n;i++){
                if(this.state.main_data[i].id === id)
                    index = i;
            }
            var newMainData = [...this.state.main_data];
            newMainData[index].totalComments++;
            this.setState({ main_data : newMainData });
        }
    }
    
    async deleteLogic(id){
        // delete from DB using API
        var url = API + 'photopost/delete/'+id;
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(url, {method:'DELETE', headers});
        const resp = await fetch(request);
        const data = await resp.json();
        if(data.response === 'success'){
            const newMainData = this.state.main_data.filter( item => item.id !== id)
            this.setState( {main_data : newMainData }); 
        }
    }

    render(){
        return (
                <div>
                    {this.state.LikesModalOpen === true
                        &&
                        <ModalAllLikes  onClose={e=>{this.setState({LikesModalOpen:false})}}
                                        post_id={this.state.LikesModalPostIdPassed}/>
                    }

                    {this.state.CommentModalOpen === true
                        &&
                        <ModalAllComments   onClose={e=>{this.setState({CommentModalOpen:false})}} 
                                            post_id={this.state.CommentModalPostIdPassed}/>
                    }
                    
                    {this.state.main_data.length ===0 
                        && this.props.pagetype !== 'myprofile' 
                        &&<div className='container center'><h3>You're all caught up</h3></div>
                    }

                    <div className='row'>
                        {this.state.main_data.map(this.foo)}
                    </div>

                    <div className='container center'>
                        <button onClick={this.onPrevPageBtnClick} className='btn indigo hoverable'  style={{'margin':'10px'}}>
                                <i className="material-icons">navigate_before</i>
                            </button>
                        <button onClick={this.onNextPageBtnClick} className='btn indigo hoverable'  style={{'margin':'10px'}}>
                                <i className="material-icons">navigate_next</i>
                            </button>
                    </div>

                </div>
                );
    }
    foo(t){
        return <div>
                    <div className="col">
                        <div className="card hoverable" style={{maxWidth: '350px'}}>
                            <div className="card-image">
                                <img src={t.image} alt=''/>                                    
                                <div onClick={this.likeLogic.bind(this, t.id)}>
                                    <LikeButton is_liked={t.is_liked}/>
                                </div>
                                {   (this.props.pagetype === 'myprofile')
                                    &&  
                                    <div onClick={this.deleteLogic.bind(this, t.id)} className="btn-floating halfway-fab hoverable red right">
                                            <i className="material-icons">delete_forever</i>
                                    </div>
                                }
                            </div>
                            <div className="card-content">
                                <div className="row">
                                    <div className='col'>
                                        <b><a href={'/friend/'+t.uploaded_by}>{t.uploaded_by}</a></b>                            
                                    </div>
                                    <div className='col right'>   
                                        <i className="grey-text">{t.date_created}</i>                                         
                                    </div>
                                </div>                                
                                <div className='row'>   
                                    <i> {t.hashtags}</i>
                                </div>
                                <div class="card-action center">
                                    <a onClick={e=>this.setState({  LikesModalOpen:true,
                                                                    LikesModalPostIdPassed:t.id, 
                                                                    CommentModalOpen:false,
                                                                    CommentModalPostIdPassed :0})}>
                                        {t.totalLikes} Likes
                                    </a>
                                    <a onClick={e=>this.setState({CommentModalOpen:true, 
                                                                    CommentModalPostIdPassed : t.id,
                                                                    LikesModalOpen:false,
                                                                    LikesModalPostIdPassed:0})}>
                                        {t.totalComments} Comments
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className='card'>
                            <div className='card-content'>
                                <div className='row'>
                                    <div class="input-field col s10">
                                        <input  type='text' placeholder="add comment..." 
                                                onChange={e=>this.setState({comment:e.target.value})}>
                                        </input>
                                        <i  onClick={this.commentLogic.bind(this, t.id)} 
                                            className='material-icons hoverable prefix'>
                                            send
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>;
    }    

}

export default PopulateData;