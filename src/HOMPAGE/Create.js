import React, { useEffect, useState , useRef } from 'react'
import "./create.css"
import Modal from './Modal';
import Circle from '@uiw/react-color-circle';
// import { Omit } from '@types/lodash';
import { HsvaColor, ColorResult } from '@uiw/color-convert';
import { SwatchProps } from '@uiw/react-color-swatch';
// interface CircleProps extends Omit<SwatchProps, 'color' | 'onChange'> {
//   color?: string | HsvaColor;
//   onChange?: (color: ColorResult) => void;
// }

function Create() {

    const [fileSelected, setFileSelected] = useState(false);
    const [textEntered, setTextEntered] = useState(false);
    const [selectedFileName, setSelectedFileName] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const[modalIsOpen, setModalIsOpen] = useState(false);

    
    const [isImageOpen, setIsImageOpen] = useState(false);

    const [isTextOpen, setIsTextOpen] = useState(false);
    const [hex, setHex] = useState('#F44E3B');


    const handleClose = () => {
        setFileSelected(false);
        setTextEntered(false);
        setSelectedFileName('');
        setIsTextOpen(false);
        setIsImageOpen(false);
      };
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setSelectedImage(reader.result);
            setModalIsOpen(true);
          };
          reader.readAsDataURL(file);
        }
      setFileSelected(true);
      setIsImageOpen(true);
      setSelectedFileName(event.target.files[0].name);
    };
    const closeModal = () => {
      setSelectedImage(null);
      setModalIsOpen(false);
    };

    const handleTextChange = (event) =>{
        setIsTextOpen(true);
    }
  return (
    <>
    <body>
<div className='main2'>
 <div className='pop_box'>
   <div className='pop_up'>
    <div className='pop_up_story'>
      <input type='file'  id="file"accept="image/*" onChange={handleImageChange}></input>
       <label for="file">AddStory</label>
     </div>
       <div className='pop_up_text'>
       <button  onClick={handleTextChange}>AddText</button>
       
       </div>
       </div>  
       </div>      

{isImageOpen &&(
<Modal onClose={handleClose}> 
<div className='black'>

</div>
{/* <div className='pop_up_btn'> 
   {(fileSelected && !textEntered) && <button onClick={handleImageUpload} >Upload Image</button>}
  {(textEntered && !fileSelected) && <button onClick={handleImageUpload} >Share Texts</button>}
{(textEntered && fileSelected) && <button onClick={handleImageUpload} >Upload</button>}
  </div> */}

</Modal>) } 

{modalIsOpen&&(
<Modal 
className="Modal"
overlayClassName="overlay"
  onRequestClose={closeModal} contentLabel="Selected Image">
    <span><h4>Preview</h4></span>
        {selectedImage && (
           
          <div className='popup_black'>
        <img src={selectedImage} alt="Selected"/>
        </div>
        )}
      </Modal>
)}; 



{isTextOpen &&(
<Modal onClose={handleClose}> 
 {selectedImage && (
        <div className="pop-in">
        
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}
<div className='pop_up_btn'> 
  
  </div>

</Modal>) }






<div className='create_leftbar'>
    <div className='create_icons'>
    <i class="fa-solid fa-xmark"></i>
    <img src="./images/Logo.png" alt=""></img>
    </div>
    <div className='set1'>
    <h1>Your Story</h1>
    <i class="fa-solid fa-gear"></i>
    </div>
    <div className='create_img'>
    <img src="./images/makeup.jpg" alt=""></img>
    <h3>Luna</h3>
    </div>
    <br></br>
    <hr></hr>
    {modalIsOpen&&(
    <div className='pop_up_btn'>
      <button>Discard</button>
      <button>Share to Story</button>
    </div>
    )}
    {isTextOpen &&(
    <div className='wrapper'>
      <div className='text_area'>
        <textarea placeholder='Start typing' required></textarea>
        <div className='color'>
          <h4>Backgrounds</h4>
        <Circle
         className='colors'
      colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00',"red" ,"blue","orange","yellow","#e9e9e9","green","black","purple","aqua","blueviolet"]}
      
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
    </div>
      </div>
      <div className='pop_up_btn1'>
      <button>Discard</button>
      <button>Share to Story</button>
    </div>
    </div>
    )}
</div>

</div>
</body>
  
    </> 
  )
}

export default Create;
