import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function BlogsPage(){
  const navigate = useNavigate();
  return(
    <Fragment>
       <button onClick={()=>{
        navigate("/")
       }}>Go to Home page</button>
    </Fragment>
  );
}
export default BlogsPage;