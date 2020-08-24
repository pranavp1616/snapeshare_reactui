import React from 'react';
import {Modalstyle} from './Global'

class ModalAllComments extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
             <div>
                 {  this.props.isOpen == true
                    &&
                    <div className='container center' style={Modalstyle}>
                        <div className='card' style={{marginTop:'100px', marginLeft:'10%', marginRight:'10%'}}>
                            <div className='card-content'>
                                <button onClick={this.props.onClose} className='btn'>x</button>
                                All Comments {this.props.post_id}
                            </div>
                        </div>
                    </div>
                 }
             </div>
        );
    }
}

export default ModalAllComments;