import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { FacebookIcon, FacebookShareButton } from "next-share";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Pricelist from "./Pricelist";
import Video from "./Video";
import { useRouter } from "next/router";
import Modal from "react-bootstrap/Modal";
import { style } from "dom-helpers";

export default function Home() {
  const [showModal, setshowModal] = useState(false);
  const handleClose = () => setshowModal(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [description, setdescription] = useState("");

  const router = useRouter();
  return (
    <div>
      <Modal
        show={showModal}
        size="md"
        centered
        onHide={handleClose}
        animation={false}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            paddingBottom:10,
            borderRadius:10
          }}
        >
          <div style={{height:80, width:'100%',backgroundColor:'black',paddingLeft:20,paddingTop:10,paddingRight:20,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <h1 style={{fontFamily:'QuickSand',color:'grey',fontSize:26}}>NMAF Green Olive Pty Ltd</h1>
          <h1 style={{color:'grey',fontSize:26}} onClick={()=>setshowModal(!showModal)}>x</h1>
          </div>
          <div style={{backgroundColor:'#A8A8A8',height:70,marginTop:-20,width:'80%',borderRadius:5,display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
          <p style={{fontFamily:'QuickSand'}}>Hi! Let us know how we can help and we’ll respond shortly.</p>
          </div>
          <div style={{ display: "flex", flexDirection:'column' }}>
            <div className={styles.inputfield}>
              <input
                type={"text"}
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                placeholder={"Name*"}
                className={styles.input}
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  outline: "",
                }}
              />
            </div>
            <div className={styles.inputfield}>
              <input
                type={"text"}
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                placeholder="Email*"
                className={styles.input}
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              />
            </div>
          </div>
          <textarea
            value={description}
            placeholder={"How can we help?*"}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            className={styles.textarea}
          />
          <div
          style={{
            
            height: 40,
            borderRadius: 20,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            marginTop:10,
            paddingTop: 5,
            paddingLeft:20,
            paddingRight:20
          }}
         
        >
          <p
            style={{
              color: "white",
              fontFamily: "QuickSand",
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            Send
          </p>
        </div>
        <p style={{fontFamily:'QuickSand',fontSize:14,textAlign:'center',paddingLeft:40,paddingRight:40}}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. </p>
        </div>
      </Modal>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: 20,
          backgroundColor: "black",
          paddingTop: 1,
          paddingBottom: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "white", fontSize: 12 }}>
          Get 10% off this month at Olive Day Spa when you stay with us.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: 70,
          justifyContent: "right",
          backgroundColor: "#fafafa",
          alignItems: "center",
          paddingRight: 50,
        }}
      >
        <p style={{ fontSize: 20, marginTop: 10 }}>+27 58 303 2142</p>
        <div
          style={{
            width: 150,
            height: 40,
            borderRadius: 20,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            marginLeft: 10,
            paddingTop: 5,
          }}
          onClick={() => {
            setshowModal(true);
          }}
        >
          <p
            style={{
              color: "white",
              fontFamily: "QuickSand",
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            Contact Us
          </p>
        </div>
      </div>
      <div className={styles.main}>
        <div style={{ position: "absolute", marginTop: "-1%", zIndex: 1000 }}>
          <img
            src={
              "https://img1.wsimg.com/isteam/ip/48270e8b-ca81-4ebf-956d-4676f84960e3/Inverted%20Logo%201.jpg/:/rs=h:200,cg:true,m/qt=q:95"
            }
          />
        </div>
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            marginTop: "18%",
            borderRadius: 250,
            backgroundColor: "black",
            opacity: 0.7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              display: "flex",
              color: "white",
              fontSize: 48,
              zIndex: 1000,
              textAlign: "center",
            }}
          >
            Come In As Guests, Leave As Family
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div className={styles.topmain}></div>

          <div className={styles.topmainsec}></div>
          <div style={{ height: 50 }}></div>
        </div>
        <div className={styles.mid}>
          <p style={{ fontSize: 50, color: "white", textAlign: "center" }}>
            You Deserve A Break
          </p>
          <div
            style={{
              paddingTop: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              width: 150,
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
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Univers6 Kroon Ave, Panorama, Bethlehem, 9701, South Africaity of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width={1500}
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
          <hr
            style={{
              backgroundColor: "grey",
              height: 2,
              width: 500,
            }}
          />
          <p
            style={{
              marginLeft: 10,
              marginRight: 10,
              fontSize: 18,
              fontFamily: "QuickSand",
              fontWeight: "600",
              alignItems: "center",
            }}
          >
            {" "}
            Social
          </p>
          <hr
            style={{
              backgroundColor: "grey",
              height: 2,
              width: 500,
            }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <FacebookShareButton
            url={"https://web.facebook.com/GreenOliveGuesthouse?_rdc=1&_rdr"}
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
