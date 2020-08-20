import React from 'react';

function PhotoPost(props){
    return (
        <div>
            <br/>
            Uploaded by : {props.uploaded_by}
            <br/>
            id
            <br/>
            image
            <br/>
            hashtags
            <br/>
            <br/>
        </div>
    );
}

export default PhotoPost;