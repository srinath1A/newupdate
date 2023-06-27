import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Createstory() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
    const handleImageUpload = (event) =>{
        
        const formData = new FormData();
        formData.append('image',selectedImage);

        axios.post(`http://localhost:5000/api/stories/createStory/ajay@gmail.com`,formData)
        .then(response => {
            if(response.data != null)
            {
                
                navigate("/");

            }
        })
        // .catch(console.error( =>{

        // });)

    }
    


  return (
    <div>
      <h1>choose file</h1>
      <button>
      <input type='file' accept="image/*" onChange={handleImageChange}></input>
      </button>
      <button onClick={handleImageUpload}>Upload</button>
    </div>
  )
}

export default Createstory;
