import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ContactArea from "./contactComponent/contactArea";

function ContactPage(){
  const navigate = useNavigate();
  return(
    <Fragment>
       <ContactArea/>
       <button onClick={()=>{
        navigate("/")
       }}>Go to Home page</button>
    </Fragment>
  );
}
export default ContactPage;