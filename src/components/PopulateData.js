import React from 'react';
import PhotoPost from './PhotoPost';

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
        return <PhotoPost uploaded_by={t.uploaded_by} image={t.image} hashtags={t.hashtags}/>;
    }    

}

export default PopulateData;