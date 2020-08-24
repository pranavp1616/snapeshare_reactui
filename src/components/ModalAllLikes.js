import React from 'react';
import {Modalstyle} from './Global'
import {API} from './Global';

class ModalAllLikes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all_likes : []
        }
    }
    async getAllLikes(){
        var url = API + 'getlikes/'+this.props.post_id;
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(url,  {  method:'GET',headers }   );
        var resp = await fetch(request);
        var data = await resp.json();
        console.log(data);
    }
    render() {
        if(this.props.isOpen == true)
            this.getAllLikes();
        return (
             <div>
                 {  this.props.isOpen == true
                    &&
                    <div className='container center' style={Modalstyle}>
                        <div className='card' style={{marginTop:'100px', marginLeft:'10%', marginRight:'10%'}}>
                            <div className='card-content'>
                                <button onClick={this.props.onClose} className='btn'>x</button>
                                All likes of {this.props.post_id}
                            </div>
                        </div>
                    </div>
                 }
             </div>
        );
    }
}

export default ModalAllLikes;