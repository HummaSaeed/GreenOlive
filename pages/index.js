import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { FacebookIcon, FacebookShareButton } from "next-share";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Pricelist from "./Pricelist";
import Video from "./Video";
import { useRouter } from "next/router";
import Modal from "react-bootstrap/Modal";

export default function Home() {
  const [showModal, setshowModal] = useState(false);
  const handleClose = () => setshowModal(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [description, setdescription] = useState("");

  const router = useRouter();
  return (
    <div className={styles.body}>
    
      <div className={styles.subhead}>
        <p className={styles.subheadfont}>+27 58 303 2142</p>
        <div
          className={styles.contactbtn}
          onClick={() => {
            setshowModal(true);
          }}
        >
          <p className={styles.contacttext}>Contact Us</p>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.fixedimg}>
          <img
            src={
              "https://img1.wsimg.com/isteam/ip/48270e8b-ca81-4ebf-956d-4676f84960e3/Inverted%20Logo%201.jpg/:/rs=h:200,cg:true,m/qt=q:95"
            }
            className={styles.topimg}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div className={styles.topmain}></div>

          <div className={styles.topmainsec}></div>
          <div style={{ height: 50 }}></div>
        </div>
        <div className={styles.centercircle}
        >
          <p className={styles.centertext}>
            Come In As Guests, Leave As Family
          </p>
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.intermid}>
          <p className={styles.intertext}>
            You Deserve A Break
          </p>
          <div
            style={{
              paddingTop: 15,
              marginTop:15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              width: 150,
              height:55,
              backgroundColor: "grey",
              marginLeft: 20,
            }}
            onClick={() => {
              router.push("https://book.nightsbridge.com/22018");
            }}
          >
            <p style={{ fontSize: 18, color: "white" }}>Book Now</p>
          </div>
          </div>
        </div>
        <Video />
        <AboutUs />
        <Pricelist />
        <ContactUs />
        <footer className={styles.footer}>
        <iframe
          src="https://maps.google.com/maps?q=6%20Kroon%20Ave,%20Bethlehem%20Free%20State%20South%20Africa&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width={'99%'}
          height={300}
          allowFullScreen={true}
          tabIndex="0"
        />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            height: 150,
          }}
        >
          <hr className={styles.hr}
          />
          <p className={styles.hrtext}
          >
            {" "}
            Social
          </p>
          <hr className={styles.hr}
          />
        </div>
        <div style={{ marginBottom: 40 }}>
          <FacebookShareButton
            url={"https://www.facebook.com/GreenOliveGuesthouse/"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div
          style={{
            height: 100,
            backgroundColor: "white",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 10, textAlign: "center" }}>
            Copyright © 2022 NMAF Green Olive Pty Ltd - All Rights Reserved.
          </p>
          <hr
            style={{
              backgroundColor: "grey",
              height: 2,
              width: 100,
            }}
          />
          <p style={{ fontSize: 10, textAlign: "center" }}>
            Powered by GoDaddy
          </p>
        </div>
      </footer>
    </div>
  );
}
