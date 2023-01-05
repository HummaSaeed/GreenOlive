import React from "react";
import styles from "../styles/Home.module.css";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div style={{ height: 600, backgroundColor: "black" }}>
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <hr className={styles.hr} />
        <p className={styles.subtitle}>View Our Virtual Tour</p>
        <hr className={styles.hr} />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            clear: "both",
            display: "table",
            position: "relative",
            marginTop: 110,
          }}
        >
          <iframe
            src="https://www.sharefilez.co.za/green_olive/vt2/index.htm"
            width="100%"
            height="480px"
            frameBorder="0"
            allowtransparency="true"
            allowfullscreen="true"
          ></iframe>
          <h4
            style={{
              color: "#ffffff",
              position: "relative",
              fontFamily: "QuickSand",
              fontSize: 15,
              padding: 0,
              margin: 5,
              fontWeight: "normal",
            }}
          >
            &bull; To explore further, click on the circles.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Video;
