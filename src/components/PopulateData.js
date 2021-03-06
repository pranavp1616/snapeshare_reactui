import React from 'react';
import {API} from './Global';
import LikeButton from './LikeButton';
import ModalAllLikes from './ModalAllLikes';
import ModalAllComments from './ModalAllComments';
import '../App.css';

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

        const request = new Request(this.props.url+'page/'+this.pageNumber, {method:'GET', headers});
        const resp = await fetch(request);
        const data = await resp.json();
        this.setState(  {   main_data : data    }   );
    }

    async likeLogic(id){
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);

        var request = new Request(API+'like/'+id, {method:'POST',headers});
        var resp = await fetch(request);
        var data = await resp.json();

        const n = this.state.main_data.length; var i=0, index=-1;
        for(i=0;i<n;i++)
            if(this.state.main_data[i].id === id)
                index = i;
        var newMainData;
        if(data.message === 'liked'){
                    newMainData = [...this.state.main_data];
                    newMainData[index].is_liked = true;
                    newMainData[index].total_likes++;
                    this.setState({ main_data : newMainData });
        }
        else{
                    newMainData = [...this.state.main_data];
                    newMainData[index].is_liked = false;
                    newMainData[index].total_likes--;
                    this.setState({ main_data : newMainData });
        }
    }

    async commentLogic(id){
        if(this.state.comment.length <1)
            return;

        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var formData = new FormData();
        formData.append('comment',this.state.comment);

        var request = new Request(API+'comment/'+id, {method:'POST',headers, body:formData});
        var resp = await fetch(request);
        var data = await resp.json();

        if(data.response === 'success'){
            alert('comment posted');
            const n = this.state.main_data.length; var i=0, index=-1;
            for(i=0;i<n;i++)
                if(this.state.main_data[i].id === id)
                    index = i;
            var newMainData = [...this.state.main_data];
            newMainData[index].total_comments++;
            this.setState({ main_data : newMainData });
        }
        this.setState({comment:''}); // reset to empty string, else other posts might call API with old comment
    }
    
    async deleteLogic(id){
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);

        var request = new Request(API + 'photopost/delete/'+id, {method:'DELETE', headers});
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
                    {   this.state.LikesModalOpen === true
                        &&
                        <ModalAllLikes  onClose={e=>{this.setState({LikesModalOpen:false})}}
                                        post_id={this.state.LikesModalPostIdPassed}/>
                    }
                    {   this.state.CommentModalOpen === true
                        &&
                        <ModalAllComments   onClose={e=>{this.setState({CommentModalOpen:false})}} 
                                            post_id={this.state.CommentModalPostIdPassed}/>
                    }
                    {   this.state.main_data.length ===0 
                        &&  this.props.pagetype !== 'myprofile' 
                        &&  <div className='text-center'><h3>You're all caught up</h3></div>
                    }
                    <div className='container'>
                        <div className='row'>
                            {this.state.main_data.map(this.foo)}
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col text-center'>
                                <button className='btn btn-primary' style={{margin:'4px'}} 
                                        onClick={this.onPrevPageBtnClick}>prev</button>
                                {   this.state.main_data.length !== 0  
                                    && <button className='btn btn-primary' style={{margin:'4px'}} 
                                        onClick={this.onNextPageBtnClick}>next</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
    
    foo(t){
        var d = new Date(t.date_created);
        const date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
        return  <div className='col-lg-4 col-md-5 col-sm-6 photo_col_padding'>
                    <div className='myphotocard'>        
                        <div>
                            <img src={t.image} alt='image'/>                                    
                        </div>
                        <div style={{marginRight:'20px',marginLeft:'20px'}}>
                            <div className='row'>
                                <div className='col-lg-10'>
                                    <div onClick={this.likeLogic.bind(this, t.id)}>
                                        <LikeButton is_liked={t.is_liked}/>
                                    </div>
                                </div>
                                <div className='col'>
                                    {   (this.props.pagetype === 'myprofile')
                                        &&  <i  onClick={this.deleteLogic.bind(this, t.id)} style={{color:'red'}} 
                                                className='fa fa-trash-o fa-lg'></i>
                                    }
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <b><a href={'/friend/'+t.uploaded_by}>{t.uploaded_by}</a></b>                    
                                </div>
                                <div className='col'>
                                    <i style={{color:'grey'}}>  posted on {date}</i> 
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <i>{t.hashtags}</i>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <div class="input-group" style={{marginTop:'20px'}}>
                                        <input  className='form-control' 
                                                type='text' placeholder='comment?' 
                                                onChange={e=>this.setState({comment:e.target.value})} />                            
                                        <span class="input-group-btn">
                                            <button className='btn' 
                                                    onClick={this.commentLogic.bind(this, t.id)}>
                                                        <span className='fa fa-paper-plane fa-lg' style={{color:'#4267B2'}} aria-hidden='true'></span>
                                                    </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col text-center' style={{marginTop:'10px', marginBottom:'15px'}}>
                                    <a  href='#' onClick={e=>this.setState({  LikesModalOpen:true,
                                                    LikesModalPostIdPassed:t.id})}>
                                        <i class="fa fa-heart fa-lg" aria-hidden="true"></i> <b>{t.total_likes}</b> 
                                    </a>
                                </div>
                                <div className='col text-center' style={{marginTop:'10px', marginBottom:'15px'}}>
                                    <a href='#' onClick={e=>this.setState({CommentModalOpen:true, 
                                                    CommentModalPostIdPassed : t.id})}>
                                        <i class="fa fa-comments fa-lg" aria-hidden="true"></i> <b>{t.total_comments}</b>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
    }    
}

// CSS  

export default PopulateData;