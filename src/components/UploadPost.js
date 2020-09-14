import React from 'react';
import {API} from './Global';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

class UploadPost extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hashtags : '',
            //react-image-crop   statevariables
            src: null,
            crop: {
                unit: "%",
                width: 30,
                aspect: 1 / 1 // square aspect ratio
            },
            croppedImageUrl: null,
        }
        this.uploadPostLogic = this.uploadPostLogic.bind(this);
        this.handleInputFileChange = this.handleInputFileChange.bind(this);
    }

    async uploadPostLogic(){
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);

        var formData = new FormData();  
        formData.append('image',this.state.croppedImage);  
        formData.append('hashtags',this.state.hashtags);

        var request = new Request(API +'photopost/create/', {method:'POST', headers, body:formData}  );
        await fetch(request);
        window.location.reload();
    }
 
    render(){        
        // react-image-crop 
        const { crop, src } = this.state;

        return  <div className='container' style={{maxWidth:'500px'}}>
                        <div className='card' style={{padding:'20px'}}>
                            <input type="file" onChange={this.handleInputFileChange} accept="image/*"/>
                            <div class="input-group" style={{marginTop:'20px'}}>
                                <input  className='form-control' 
                                        type="text" placeholder='hashtags?'
                                        onChange={ e => this.setState({ hashtags : e.target.value})} /> 
                                <button className='btn btn-success' onClick={this.uploadPostLogic}>Post</button>
                            </div>
                        </div>
                        <ReactCrop  src={src}
                            crop={crop}
                            onImageLoaded={this.onImageLoaded}
                            onComplete={this.onCropComplete}
                            onChange={this.onCropChange}/>
                </div>
    }

    // react-image-crop - CROP logic functions
    handleInputFileChange(e){
        const fileReader = new FileReader()
        fileReader.onloadend = () => {  this.setState({src: fileReader.result })    }   
        fileReader.readAsDataURL(e.target.files[0])
    }
    onImageLoaded = image => {
        this.imageRef = image
    }
    onCropChange = (crop) => {
        this.setState({ crop });
    }
    onCropComplete = crop => {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = this.getCroppedImg(this.imageRef, crop)
            this.setState({ croppedImageUrl })
        }
    }
    getCroppedImg(image, crop) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        )    
        const reader = new FileReader()
        canvas.toBlob(blob => {
            reader.readAsDataURL(blob)
            reader.onloadend = () => {
                this.dataURLtoFile(reader.result, 'img'+Date.now()+'.jpg')
            }
        })
    }
    dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
        let croppedImage = new File([u8arr], filename, {type:mime});
        this.setState({croppedImage: croppedImage }) 
    }

}

export default UploadPost;