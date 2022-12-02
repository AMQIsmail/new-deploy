import React, { Fragment } from "react";
import Layout from "./Laout";
import ContactArea from "./contactComponent/contactArea";

function ContactPage(){
  return(
    <Fragment>
      <Layout />
       <ContactArea/>
    </Fragment>
  );
}
export default ContactPage;