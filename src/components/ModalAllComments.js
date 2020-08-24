import React from 'react';
import {Modalstyle} from './Global'
import {API} from './Global';

class ModalAllComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all_comments : []
        }
    }
    async componentDidMount(){
        alert('BLAH BLAH');
        var url = API + 'getcomments/'+this.props.post_id;
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var request = new Request(url,  {  method:'GET',headers }   );
        var resp = await fetch(request);
        var data = await resp.json();
        var temp_array = data.map((e)=> e.username);
        console.log(temp_array);
        this.setState({all_comments:temp_array});
    }

    render() {
        return (
             <div>
                    <div className='container center' style={Modalstyle}>
                        <div className='card' style={{marginTop:'100px', marginLeft:'10%', marginRight:'10%'}}>
                            <div className='card-content'>
                                <button onClick={this.props.onClose} className='btn'>x</button>
                                All Comments of {this.props.post_id}
                                {this.state.all_comments[0]}
                            </div>
                        </div>
                    </div>
             </div>
        );
    }
}

export default ModalAllComments;