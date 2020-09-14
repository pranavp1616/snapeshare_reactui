import React from 'react';

function LikeButton(props){
    return  <div>
                    {   ((props.is_liked === true)
                        &&
                        <i className='fa fa-gratipay fa-2x' style={{color:'red'}} aria-hidden='true'></i>)
                        ||
                        <i className='fa fa-gratipay fa-2x' style={{color:'#4267B2'}} aria-hidden='true'></i>
                    }
            </div>
}

export default LikeButton;