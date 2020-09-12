import React from 'react';

function LikeButton(props){
    return <div>
                <div>
                    {  ( (props.is_liked === true)
                        &&
                        <i>AlreadLiked</i>  ) 
                        ||
                        <i>Like</i>   
                    }
            </div>
        </div>
}
export default LikeButton;