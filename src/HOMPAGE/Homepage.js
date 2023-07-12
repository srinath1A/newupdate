  import React, { useEffect, useState , useRef } from 'react'
  import "./Homepage.css";
  import Leftside_bar from './Leftside_bar';
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

    const [post, setPost] = useState([]);

    useEffect(() => {
      fetchPost();
    }, []);

    const fetchPost = async () => {
      const response = await fetch('http://localhost:5000/api/post/getAllPosts');
      const data = await response.json();
      setPost(data);
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
          <div className='create_story'>
            <img src="./images/makeup.jpg" alt=''></img>
            <div className='story_upload'>
              <Link to="Create" className='' >
           <i class="fa-solid fa-circle-plus"></i>
           </Link>
           <span>Create Story</span>
            </div>
          </div>
      
          <div className='Youer_story'>
          {<img src={`data:image/jpeg;base64,${userStory.image}`}   alt={""} /> }          
           <div className='youer_story_upload'>
            <Link to="Youerstory" className='name'><span>Your Story</span></Link>
            </div>
          </div>
          
          
          <div className='Friend_story'>
          {stories.map((story) => (
            <div key={story.id} style={{
              marginTop:"30px",
              marginLeft:"30px",

            }}>
              <span>{story.captions}</span>
            <div className='Friend_story_upload'>
            
            </div>
          </div>
          ))}
          </div>
          
           
          <div className='Luna_story'>
            <img src="./images/paul.jpg" alt=''></img>
            <div className='Luna_story_upload'>
            <Link to="Lunastory" className='luna'><span>Paul Walker</span></Link>
            </div>
          </div>
        </div>



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

    
    <div className='timeline'>
    {post.map((post) => (
        <div className='friends_post'>
          <div className='friends_post_top'>
            <div className='img_and_name'>
            <img src={`data:image/jpeg;base64,${post.userImage}`} alt=''></img>
            <div className='friends_name'>
              <p className='friends_name'>
               <span>{post.userName}</span>
              </p>
              <p className='time'>1h.<i class="fa-regular fa-user-group"></i></p>
            </div>

            </div>
            <div className='menu'>
              <i class="fa-solid fa-ellipsis"></i>
            </div>

          </div>
          <img src={`data:image/jpeg;base64,${post.image}`} alt=''></img>
          <div className='info'>
            <div className='emoji_img'>
            
            </div>
          </div>
          
        </div> 
        ))}
        
       
        {/* second friend...................................................................... */}
        <div className='friends1_post'>
          <div className='friends1_post_top'>
            <div className='img_and_name1'>
            <img src="./images/pic1.jpg" alt=''></img>
            <div className='friends_name1'>
              <p className='friends_name1'>
                Lucy Silva
              </p>
              <p className='time1'>2h.<i class="fa-regular fa-user-group"></i></p>
            </div>

            </div>
            <div className='menu1'>
              <i class="fa-solid fa-ellipsis"></i>
            </div>

          </div>
          <img src="./images/pic4.jpg" alt=''></img>
          <div className='info1'>
            <div className='emoji_img1'>
            
            </div>
          </div>
          </div>
          {/* 3rd...........................................................................friend */}
          <div className='friends2_post'>
          <div className='friends2_post_top'>
            <div className='img_and_name2'>
            <img src="./images/pic1.jpg" alt=''></img>
            <div className='friends_name2'>
              <p className='friends_name2'>
                Lucy Silva
              </p>
              <p className='time2'>2h.<i class="fa-regular fa-user-group"></i></p>
            </div>

            </div>
            <div className='menu2'>
              <i class="fa-solid fa-ellipsis"></i>
            </div>

          </div>
          <img src="./images/pic5.jpg" alt=''></img>
          <div className='info2'>
            <div className='emoji_img2'>
            
            </div>
          </div>
          </div>
{/*4th.......................................friend  */}
<div className='friends3_post'>
          <div className='friends3_post_top'>
            <div className='img_and_name3'>
            <img src="./images/pic1.jpg" alt=''></img>
            <div className='friends_name3'>
              <p className='friends_name3'>
                Lucy Silva
              </p>
              <p className='time3'>2h.<i class="fa-regular fa-user-group"></i></p>
            </div>

            </div>
            <div className='menu3'>
              <i class="fa-solid fa-ellipsis"></i>
            </div>

          </div>
          <img src="./images/makeup1.jpg" alt=''></img>
          <div className='info3'>
            <div className='emoji_img3'>
            
            </div>
          </div>
          </div>
          

  </div> 
</div>
  {/* right........................................................................... */}
        
        <div className='Right_side_bar'>
          <Rightside_bar />
        </div>

       {/*} {stories.map((story) => (
            <div className='Friend_story'>
              <div key={story.id}>
              <img src={`data:image/jpeg;base64,${story.image}`}  alt="Story" />
            <span>{story.captions}</span>
              <div className='Friend_story_upload'>
              
              <Link to="Friendstory" className='friend'><span>Luna Stoned</span></Link>
              </div>
            </div>
            </div>
       ))}*/}

    </div>
      </>
    );
  };

  export default Homepage;