import React from 'react';

function LikeButton(props){
    return <div>
                <div className="btn-floating halfway-fab hoverable left">
                    {   (props.is_liked === true)
                        &&
                        <i className="material-icons red">favorite</i>   
                        ||
                        <i className="material-icons grey">favorite</i>   
                    }
            </div>
        </div>
}
export default LikeButton;