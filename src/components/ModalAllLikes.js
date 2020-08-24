import React from 'react';

class ModalAllLikes extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
             <div>
                 {  this.props.isOpen == true
                    &&
                    <div>
                        {alert('like modal opend')}
                        All likes <button onClick={this.props.onClose}>x</button>
                    </div>
                 }
             </div>
        );
    }
}

export default ModalAllLikes;