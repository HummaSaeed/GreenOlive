import styles from "../styles/Home.module.css";
import React,{useState} from "react";
import { FacebookIcon, FacebookShareButton } from "next-share";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Pricelist from "./Pricelist";
import Video from "./Video";
import { useRouter } from 'next/router';


export default function Home() {
  const [messageList, setmessageList] = useState([]);
  const router = useRouter()
  return (
    <div>
       
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
        <p style={{ fontSize: 20 }}>+27 58 303 2142</p>
      </div>
      <div className={styles.main}>
        <div   style={{position: "absolute",
            marginTop: "-1%",
            zIndex:1000,
            }}>
          <img src={"https://img1.wsimg.com/isteam/ip/48270e8b-ca81-4ebf-956d-4676f84960e3/Inverted%20Logo%201.jpg/:/rs=h:200,cg:true,m/qt=q:95"}/>
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
            display:'flex',
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
              textAlign:'center'
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
          <p style={{fontSize:50,color:'white',textAlign:'center'}}>You Deserve A Break</p>
          <div style={{height:50,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:30,width:150,backgroundColor:'grey',marginLeft:20}} onClick={() => {router.push('/Book')}}>
          <p style={{fontSize:18,color:'white'}}>
            Book Now
          </p>
          </div>
        </div>
      </div>
      <Video/>
      <AboutUs/>
      <Pricelist/>
    <ContactUs/>

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
          }}
        >
          <hr
            style={{
              backgroundColor: "grey",
              height: 2,
              width: 500,
            }}
          />
          <p style={{ marginLeft: 10, marginRight: 10, fontSize: 16 }}>
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
        <FacebookShareButton url={"https://web.facebook.com/GreenOliveGuesthouse?_rdc=1&_rdr"}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
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
