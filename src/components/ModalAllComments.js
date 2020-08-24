import React from 'react';

class ModalAllComments extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
             <div>
                 {  this.props.isOpen == true
                    &&
                    <div>
                        {alert('cmnt modal opend')}
                        All comments <button onClick={this.props.onClose}>x</button>
                    </div>
                 }
             </div>
        );
    }
}

export default ModalAllComments;