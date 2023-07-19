import React from "react";
import "./Homepage.css";
import { useEffect, useState} from 'react'

function Timeline() {
    const [post, setPost] = useState([]);

    useEffect(() => {
      fetchPost();
    }, []);

    const fetchPost = async () => {
      const response = await fetch('http://localhost:5000/api/post/getAllPosts');
      const data = await response.json();
      setPost(data);
    };
  return (
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
  )
}

export default Timeline
