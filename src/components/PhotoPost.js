import React from 'react';

class PhotoPost extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
            return (
                    <div>
                        Uploaded by {this.props.uploaded_by}
                        <br/>
                        <img src={this.props.image}/>            
                        <br/>
                        {this.props.hashtags}
                        <br/>
                        <br/>
                    </div>
                    );
    }
    
}

export default PhotoPost;