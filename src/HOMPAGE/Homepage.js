import React, { useEffect, useState } from 'react'
import "./Homepage.css";
import Leftside_bar from './Leftside_bar';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Homepage() {
  const [imageUrl,setImageUrl] = useState('');
  useEffect(() =>{
    const getImage = async () =>{
    try{
      const response = await axios.get(`http://localhost:5000/api/stories/getStory/ajay@gmail.com`);
 
      const imageUrl = URL.createObjectURL(new Blob([response.data]));
      setImageUrl(imageUrl);
  }
    catch (error){
      console.error(error);
    }
  };
  
  getImage();},[]);
  
  return (
  <>
  <nav>
    <div className='homepage_navbar'>
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
                <a href='http://localhost:3000/Createstory' target='_blank'><i class="fa-regular fa-message"></i></a>
                <a href='#'><i class="fa-regular fa-circle-question"></i></a>
                <a href='#'><i class="fa-regular fa-bell"></i></a>
                <a href='#'><i class="fa-regular fa-circle-user"></i></a>
            </li> 
          </ul>
      </div>
  </nav>
{/* ..................................................................................... */}
  <div className='hompage_container'>
{/* left............................................................................................. */}
      <div className='Left_side_bar'>
        <Leftside_bar/>
      </div>
{/* center................................................................................ */}
      <div className='homepage_components'>
        <div className='top_box'>
          <div className='create_story'>
            <img src="./images/image7.jpeg" alt=''></img>
            <div className='story_upload'>
            <Link  className="story" to="Createstory">
            <i class="fa-solid fa-circle-plus"></i>
            <span>Create Story</span>
            </Link>
            </div>
          </div>
          <div className='Youer_story'>
            <img src={imageUrl} alt=''></img>
            <div className='youer_story_upload'>
            <Link to="Youerstory" className='name'><span>Your Story</span></Link>
            </div>
          </div>
          <div className='Friend_story'>
            <img src="" alt=''></img>
            <div className='Friend_story_upload'>
            <Link to="Friendstory" className='friend'><span>Luna Stoned</span></Link>
            </div>
          </div>
          <div className='Luna_story'>
            <img src="./images/paul.jpg" alt=''></img>
            <div className='Luna_story_upload'>
            <Link to="Lunastory" className='luna'><span>Paul Walker</span></Link>
            </div>
          </div>

        </div>

      </div>
{/* right........................................................................... */}
      
      <div className='Right_side_bar'></div>

  </div>
    </>
  )
}

export default Homepage;