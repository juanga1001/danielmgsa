
import {Link} from "react-router-dom"
import React, {useEffect} from 'react'
import data from './data_Gallery'
import logo from "../images/logo-daniel.png"




function Gallery(props) {
  useEffect(() => {
    // Update the document title using the browser API
    window.scrollTo(0,0)
    console.log("Gallery Loaded")
  });

  
  const images = data.map((img)=> {
    return(
      <img key={img.id} className={`item ${img.classes}`}  alt="" src={`https://drive.google.com/uc?export=view&id=${img.imageUrl}`}></img>
    )
  })
  
  return (
    <section className="Gallery-container">
     
    <div className="Gallery-nav">
        <img src={logo} alt="" className="logo-navbar" />
        <ul >
          <li ><Link to="/" className="link-route">RETURN HOME</Link></li>
        </ul> 
    </div>
      
  
      <div className="Gallery-content">
        {images}
      </div>
    </section>
  );
}

export default Gallery;
