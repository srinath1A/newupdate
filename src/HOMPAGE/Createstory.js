import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Createstory() {
    const navigate = useNavigate();
    const handleImageUpload = (event) =>{
        const selectedFile = event.target.files[0];
        
        const formData = new FormData();
        formData.append('image',selectedFile);

        axios.post(`http://localhost:5000/api/stories/createStory/ajay@gmail.com`,formData)
        .then(response => {
            if(response.data != null)
            {
                
                navigate("/Homepage");

            }
        })
        // .catch(console.error( =>{

        // });)

    }
    


  return (
    <div>
      <h1>choose file</h1>
      <button>
      <input type='file'></input>
      </button>
      <button>Upload</button>
    </div>
  )
}

export default Createstory;
