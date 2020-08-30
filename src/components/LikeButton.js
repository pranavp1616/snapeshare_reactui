import React from 'react';

function LikeButton(props){
    return <div>
                <div className="btn-floating halfway-fab hoverable left">
                    {  ( (props.is_liked === true)
                        &&
                        <i className="material-icons red">thumb_up</i>  ) 
                        ||
                        <i className="material-icons grey">thumb_up</i>   
                    }
            </div>
        </div>
}
export default LikeButton;