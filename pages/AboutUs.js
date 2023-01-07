import React from "react";
import styles from "../styles/Home.module.css";

const AboutUs = () => {
  return (
    <div className={styles.contactus}>
      <div style={{ display: "flex", width: "100%", alignItems: "center",justifyContent:'center' }}>
        <hr className={styles.hr}
        />
        <p className={styles.hrtext}>
          About Us
        </p>
        <hr className={styles.hr}
        />
      </div>

      <p className={styles.aboutustext}
      >
        Premium Guesthouse on the N5 ideally situated across from Dihlabeng Mall
        and Frontier Inn & Casino. Our rooms are designed to be modern,
        luxurious and comfortable. Custom Made Beds are a standard in our rooms
        and our room categories cater to every travelers budget.
      </p>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Quicksand",
          color: "black",
          fontSize: 15,
          fontWeight: "600",
          marginTop: 20,
        }}
      >
        15 Mins from Clarens | 5 mins to CBD | 200m from Frontier Inn & Casino |
        3 Mins from Mediclinic
      </p>
      <div className={styles.content}>
        <div>
          <h1 style={{fontFamily:'Quicksand',fontWeight:'300',textAlign:'center'}}>Amenities</h1>
          <p style={{textAlign:'center',fontFamily:'Quicksand',fontWeight:'600',color:'grey'}}>
            We offer a variety of amenities to make your stay with us as
            comfortable as possible. DSTV is available in the rooms. We provide
            complimentary high-speed internet access and a discounted rate at
            Olive Day Spa
          </p>
        </div>
        <div>
          <h1 style={{fontFamily:'Quicksand',fontWeight:'300',textAlign:'center'}}>100% Satisfaction Guaranteed</h1>
          <p style={{textAlign:'center',fontFamily:'Quicksand',fontWeight:'600',color:'grey'}}>
          Whether this is your first visit, or you have been a guest many times, we want your experience to be excellent. Our staff is always available to help with any questions or concerns you may have. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
