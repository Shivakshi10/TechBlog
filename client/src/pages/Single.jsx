import React, { useContext, useEffect, useState } from 'react'
import Delete from "../components/img/delete.png";
import Edit from "../components/img/edit.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from "moment";
import { AuthContexProvider, AuthContext } from '../context/authContext';

const Single = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];

  const {currentUser} = useContext(AuthContext);

  const [post,setPost] = useState([]);

  useEffect(() =>{
    const fetchData = async () =>{
      try{
        const res = await axios.get( `/posts/${postId}`)
        setPost(res.data);
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[postId]);
  

  const handleDelete = async() =>{
    try{
       await axios.delete( `/posts/${postId}`)
      navigate("/");
    }catch(err){
      console.log(err);
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }
  
  return (
    <div className='single'>
      <div className="content">
      <img src={`./uploads/${post?.img}`} alt=' ' />
      <div className="user">
      <img className='userimg' src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=' ' />
      <div className="info">
        <span>{post.username}</span>
        <p>Posted {moment(post.data).fromNow()}</p>
      </div>
      {currentUser?.username === post.username &&  <div className="edit">
        <Link to={`/write?edit=2`} state={post}>
          <img src={Edit} alt='' />
        </Link>
        
        <img onClick={handleDelete} src={Delete} alt='' />
      </div> }
    
      </div>
        <h1>{post.title}</h1>
        <p>
        {getText(post.desc)} 
        </p>
      </div>
      <div className="menu">
        <Menu cat={post.cat}/>
       </div>
    </div>
  )
}

export default Single
