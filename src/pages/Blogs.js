import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {blogsData} from "./data";

function BlogsPage(){
  const [blogs] = useState(blogsData);

  const truncateString = (str, num) => {
       if(str.length > num){
        return str.slice(0, num) + "...";
       }else{
        return str;
       }
  }
  const articleStyle = {
    width: '800px',
    height: '200px',
    margin: '5px auto',
    background: 'black',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
  }
  return(
    <Fragment>
       <h1 style={{textAlign: 'center'}}>Blogs Page.</h1>
       <section>
        {blogs.map((blog)=>{
          const {id, title, body} = blog;
          return <article style={articleStyle} key={id}>
            <h3>{title}</h3>
            <p>{truncateString(body, 300)}</p>
            <Link to={title}>Learn More</Link>
          </article>
        })}
       </section>
    </Fragment>
  );
}
export default BlogsPage;