{/* <div className='create_story'>
<img src="./images/makeup.jpg" alt=''></img>
<div className='story_upload'>
<i class="fa-solid fa-circle-plus" onClick={handleIconClick}></i>
{isOpen &&(
<Modal onClose={handleClose}>
  <div className='pop_box'>
   <div className='pop_up'>
    <div className='pop_up_story'>
      <input type='file'  id="file"accept="image/*" onChange={handleImageChange}></input>
      <label for="file">AddStory</label>
    </div>
      <div className='pop_up_text'>
        <textarea  rows="10"placeholder='Write Something' onChange={onChange}></textarea>
      </div>             
  </div>
  {selectedFileName && <p> {selectedFileName}</p>}
  <div className='pop_up_btn'>
  {(fileSelected && !textEntered) && <button onClick={handleImageUpload} >Upload Image</button>}
  {(textEntered && !fileSelected) && <button onClick={handleImageUpload} >Share Texts</button>}
  {(textEntered && fileSelected) && <button onClick={handleImageUpload} >Upload</button>}
  </div>
  </div>
  

</Modal>

)}
<span>Create Story</span>

</div>
</div> */}