import React from 'react';
import {API} from './Global';

class PopulateData extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {  main_data : []  };
        this.foo = this.foo.bind(this);
    }

    async componentDidMount(){
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(this.props.url, {method:'GET', headers});
        
        const resp = await fetch(request);
        const data = await resp.json();
        console.log(data);
        console.log(this.state.main_data)
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
            if(this.state.main_data[i].id == id)
                index = i;
        }

        if(data.response == 'liked'){
                    var newMainData = [...this.state.main_data];
                    newMainData[index].is_liked = true;
                    this.setState({ main_data : newMainData });
        }
        else{
                    var newMainData = [...this.state.main_data];
                    newMainData[index].is_liked = false;
                    this.setState({ main_data : newMainData });
        }
    }

    commentLogic(id){
        alert('comment id '+id);
    }
    
    async deleteLogic(id){
        // delete from DB using API
        var url = API + 'photopost/delete/'+id;
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(url, {method:'DELETE', headers});
        
        const resp = await fetch(request);
        const data = await resp.json();
        if(data.response === 'deleted'){
            // delete from state.main_data
            const newMainData = this.state.main_data.filter( item => item.id !== id)
            this.setState( {main_data : newMainData }); 
        }
    }

    render(){
        console.log('Rendering...');
        return (
                <div>
                    {this.state.main_data.map(this.foo)}
                </div>
                );
    }
    foo(t){
        var friend_url = '/friend/'+t.uploaded_by; 
        return <div>
                    <div className="container">
                        <div className="card hoverable z-depth-2">
                            <div className="card-image">
                                <img src={t.image} alt=''/>                                    
                                <div onClick={this.likeLogic.bind(this, t.id)}>
                                    {   (t.is_liked == true)
                                    &&         
                                        <div className="btn-floating halfway-fab hoverable left">
                                            <i className="material-icons red">L</i>   
                                        </div>
                                    ||
                                        <div className="btn-floating halfway-fab hoverable left">
                                                <i className="material-icons grey">L</i>   
                                        </div>
                                    }
                                </div>
                                {   (this.props.pagetype == 'myprofile')
                                    &&  
                                    <div onClick={this.deleteLogic.bind(this, t.id)} className="btn-floating halfway-fab hoverable red right">
                                            <i className="material-icons">delete_forever</i>
                                    </div>
                                }
                            </div>
                            <div className="card-content">
                                <div className="row">
                                    <div className='col left'>
                                        <b><a href={friend_url}>{t.uploaded_by}</a></b>
                                        <i> {t.hashtags}</i>
                                    </div>
                                    <div className='col right'>
                                        <i className="grey-text">Posted on {t.date_created}</i>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col s3'>
                                        <input type='text' placeholder="add comment..."/>
                                    </div>
                                    <div class="col s1">
                                        <button onClick={this.commentLogic.bind(this, t.id)}
                                                className="btn-floating waves-effect waves-light hoverable">
                                                comment
                                        </button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
    }    

}

export default PopulateData;