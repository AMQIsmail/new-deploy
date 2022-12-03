import React, { Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Blog(){
    const navigate = useNavigate();
    const {title} = useParams();    
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
            <button onClick={()=>{
                navigate("/Blogs")
            }}>Go to Blogs Page</button>
       </div>
    </Fragment>
  );
}
export default Blog;