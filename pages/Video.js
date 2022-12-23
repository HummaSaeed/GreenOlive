import React from "react";
import styles from "../styles/Home.module.css";
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div style={{ height: 600, backgroundColor: "black"}}>
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <hr
          style={{
            backgroundColor: "grey",
            height: 2,
            width: 500,
          }}
        />
        <p
          style={{
            fontSize: 28,
            fontFamily: "Quicksand",
            fontWeight: "500",
            color: "grey",
          }}
        >
          View Our Virtual Tour
        </p>
        <hr
          style={{
            backgroundColor: "grey",
            height: 2,
            width: 500,
          }}
        />
      </div>
      <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}}>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="1100px" height="450px" />
     
      </div>
      <ul><li><p style={{color:'white',marginLeft:'90px'}}>To explore further, click on the circles.</p></li></ul>
 </div>
  );
};

export default Video;
