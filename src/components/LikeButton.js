import React from 'react';

function LikeButton(props){
    return <div>
                    {  ( (props.is_liked === true)
                        &&
                        <i>AlreadLiked</i>  ) 
                        ||
                        <i>Like</i>   
                    }
        </div>
}
export default LikeButton;