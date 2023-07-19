  import React, { useEffect, useState , useRef } from 'react'
  import "./Homepage.css";
  import Leftside_bar from './Leftside_bar';
  import Timeline from './Timeline';
  import { Link} from 'react-router-dom';
  import axios from 'axios';
  
import Rightside_bar from './Rightside_bar';


  function Homepage() {
    
    const [selectedImage, setSelectedImage] = useState(false);
    const [selectedText, setSelectedText] = useState(null);

   

    const [imageError, setImageError] = useState(false);
    const [textError, settextError] = useState(false);

    const fileInputRef = useRef(null);

    const openFileManager = () => {
      fileInputRef.current.click();
    };

   

    const onChange = (event) => {
      setSelectedText(event.target.value);
      // setTextEntered(event.target.value !== '');
    };

    const handleImageUpload = (event) =>{
        
      const formData = new FormData();
      formData.append('image',selectedImage);
      formData.append('caption',selectedText);

      axios.post(`http://localhost:5000/api/stories/createStory/ajay@gmail.com`,formData)
      .then(response => {
          if(response.data != null)
          {  
            fetchImage(); 
            setIsOpen(false); 
          }
      })
    }

    const handlePostUpload = (event) =>{
        
      const formData = new FormData();
      formData.append('image',selectedImage);
      formData.append('caption',selectedText);

      axios.post(`http://localhost:5000/api/post/createPost/ajay@gmail.com`,formData)
      .then(response => {
          if(response.data === "success")
          {   
            
          }
          else{
            console.log("error");
          }
      })
    }
    //window.onload = async () =>{
      const [userStory, setUserStory] = useState([]);

      
        const fetchImage = async () => {
            const response = await fetch('http://localhost:5000/api/stories/getStory/ajay@gmail.com');
            const data = await response.json();
            if(data.image===null)
            {
              setImageError(true);
            }
            else if(data.captions===null)
            {
              settextError(true);
            }
            setUserStory(data);
        };
      useEffect(() => {
        fetchImage();
      }, []);


    const [stories, setStories] = useState([]);

    useEffect(() => {
      fetchStories();
    }, []);

    const fetchStories = async () => {
      const response = await fetch('http://localhost:5000/api/stories/getAllStories/ajay@gmail.com');
      const data = await response.json();
      setStories(data);
    };

   


      const [isOpen, setIsOpen] = useState(false);
    
      const handleIconClick = () => {
        setIsOpen(true);
      };
      const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
      }


    return (
    <>
    <nav>
    <div className='homepage_navbar'>
      <div className="Logo">
        <img src="./images/Logo.png" alt=""></img>
        <h2>STYLISTA</h2>
      </div>
        <div className="search_box">
              <form action=''>
                <input type='text' name='search' className='srch' placeholder="i'm Looking For...."></input>
                <button><i class="fas fa-search"></i></button>
              </form>
        </div>
            <ul>
              <li >
                  <a href='http://localhost:3000/Live' className='Live'>Live</a>
              </li>
              <li>
                  <a href='http://localhost:3000/Createstory' target='blank'><i className="fa-regular fa-message"></i></a>
                  <a href='http://localhost:3000/Createstory'><i className="fa-regular fa-circle-question"></i></a>
                  <a href='http://localhost:3000/Createstory'><i className="fa-regular fa-bell"></i></a>
                  <a href='http://localhost:3000/Createstory'><i className="fa-regular fa-circle-user"></i></a>
              </li> 
            </ul>
        </div>
    </nav>
  {/* ..................................................................................................*/}
    <div className='hompage_container'>
  {/* left..............................................................................................*/}
        <div className='Left_side_bar'>
          <Leftside_bar/>
        </div>
  {/* center............................................................................................*/}
  <div className='homepage_components'>
      <div className='top_box'>
      <i id="arrow_left" class="fa-solid fa-angle-left"></i>
        <div className='create_story'>
            <img src="./images/makeup.jpg" alt=''></img>
          <div className='story_upload'>
            <Link to="Create" ><i class="fa-solid fa-circle-plus"></i></Link>
           <span>Create Story</span>
          </div>
        </div>
          <i id="arrow_right" class="fa-solid fa-angle-right"></i>
      </div>
{/*MY post....................................................  */}

      <div className='my_post'>
        <h3>Create Post</h3>
          <div className='post_top'>
            <img src="./images/makeup.jpg" alt=""></img>
            <input type="text" placeholder='let me know your thoughts.......' onChange={onChange}></input>
          </div>
          <div className='my_post_icons'>
            <i class="fa-solid fa-location-dot"></i>
            <i class="fas fa-music"></i>
            <i class="fa-regular fa-image" onClick={openFileManager}></i>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <i class="fas fa-camera"></i>
            <i class="fas fa-video"></i>
          </div>
          <div className='post_btn'>
            <button  onClick={handlePostUpload}><span>Post</span></button>
            <button><span>Save Draft</span></button>
          </div>
        </div>
{/*Time Line  ...........................................................................*/}
        <div className=''>
          <Timeline/>
        </div>
        </div>
{/* right........................................................................... */}
        
        <div className='Right_side_bar'>
          <Rightside_bar />
        </div>
    </div>
      </>
    );
  };

  export default Homepage;