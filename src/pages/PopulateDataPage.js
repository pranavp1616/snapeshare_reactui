import React from 'react';
import PopulateData from '../components/PopulateData';
import { API } from '../components/Global';

class PopulateDataPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        var url_with_page = this.props.url+'page/1';
        return <div>
                <PopulateData url={url_with_page} pagetype={this.props.pagetype}/>
                Prev Next
            </div>
    }
}

export default PopulateDataPage;