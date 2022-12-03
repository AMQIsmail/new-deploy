import React, { Fragment, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {blogsData} from "./data";

function Blog(){
    const navigate = useNavigate();
    const {title} = useParams();
    const [bodyData, setBodyData] = useState("");
    useEffect(()=>{
        const blogData = blogsData.filter((blog)=> blog.title == title);
        setBodyData(blogData[0].body);
    }, [])
    const articleStyle = {
        width: '700px',
        height: '450px',
        margin: '5px auto',
        background: 'black',
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
      }
  return(
    <Fragment>
       <div style={articleStyle}>
            <h2>Show Blog</h2>
            <h1>{title} Topic.</h1>
            <p>{bodyData.slice(0,300)}</p>
            <p>{bodyData.slice(301,800)}</p>
            <button onClick={()=>{
                navigate("/Blogs")
            }}>Go to Blogs Page</button>
       </div>
    </Fragment>
  );
}
export default Blog;