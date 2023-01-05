import React from "react";
import styles from "../styles/Home.module.css";
import { WhatsappIcon,WhatsappShareButton } from "next-share";
import Link from 'next/link'
const ContactUs = () => {
  return (
    <div className={styles.contactus}>
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <hr className={styles.hr}
        />
        <p className={styles.hrtext}>Contact Us</p>
        <hr className={styles.hr}/>
      </div>
      <p style={{ textAlign: "center", fontFamily: "Quicksand",fontWeight:'600' }}>
        Ready to book with us? Have a question about our rooms or services?
        We'll be happy to help!
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          style={{
            width: 230,
            height: 50,
            backgroundColor: "rgb(69, 90, 100)",
            borderRadius: 30,
            display:'flex',
            
            alignItems: "center",
            justifyContent: "center",
            flexDirection:'row'
          }}
          href="whatsapp://send?text=Hello World!&phone=+27789961600"
        >
          <WhatsappShareButton >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <p style={{fontFamily:'Quicksand',fontWeight:'600',marginLeft:8,fontSize:12,color:'white',marginTop:13}}>Message on Whatsapp</p>
        </Link>
       
      </div>
      <p style={{ textAlign: "center", fontFamily: "Quicksand",color:'black',fontSize:20 }}>NMAF Green Olive Pty Ltd T/A THE GREEN OLIVE GUEST</p>
   <p style={{ textAlign: "center", fontFamily: "Quicksand",color:'grey' }}>6 Kroon Avenue, Bethlehem, South Africa</p>
   <p style={{ textAlign: "center", fontFamily: "Quicksand",color:'black' }}>TEL: 058 303 2142 | EMAIL: TGOGUESTHOUSE@GMAIL.COM</p>
   <p style={{ textAlign: "center", fontFamily: "Quicksand",color:'black',fontSize:28,marginTop:30 }}>Front Desk Hours</p>
   <p style={{ textAlign: "center", fontFamily: "Quicksand",color:'grey',fontSize:16,marginTop:30,fontWeight:'600' }}>24/7 | TEL: 058 303 2142 | EMAIL:<span style={{color:'black'}}> TGOguesthouse@GMAIL.COM</span></p>
    </div>
  );
};

export default ContactUs;
