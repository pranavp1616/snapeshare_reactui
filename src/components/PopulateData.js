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
                    Populated posts from <b>{this.props.url}</b> and pagetype is <b>{this.props.pagetype}</b>
                    <br/>
                    <br/>
                    {this.state.main_data.map(this.foo)}
                    <br/>
                </div>
        );
    }
    foo(t){
        var friend_url = '/friend/'+t.uploaded_by; 
        return <div>
                    Uploaded by <a href={friend_url}>{t.uploaded_by}</a>
                    <br/>
                    <img src={t.image} alt=''/>            
                    <br/>
                    {t.hashtags}
                    Posted on {t.date_created}
                    <br/>
                    {(t.is_liked == true) && <b>Liked</b> || <b>NOT LIKED</b>} 
                    <button onClick={this.likeLogic.bind(this, t.id)}>.</button> 
                    <br/>
                    <button onClick={this.commentLogic.bind(this, t.id)}>comment</button> 

                    {this.props.pagetype == 'myprofile' &&  
                        <button onClick={this.deleteLogic.bind(this, t.id)}>Delete</button> 
                    }

                    <br/>
                    <br/>
                </div>;
    }    

}

export default PopulateData;