import React from "react";
import styles from "../styles/Home.module.css";

const AboutDetail = ({ image }) => {
  return (
    <div>
      <div
        style={{
          paddingLeft: 20,
          marginTop: 10,
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          width: "98%",
        }}
      >
        <p style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          The Green Olive Guesthouse
        </p>
      </div>
      <div
        style={{
          //   height: 400,
          width: "98%",
          boxShadow: "10px 20px 30px #E8E8E8",
          display: "flex",
          flexDirection: "row",
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <div style={{ width: "100%" }}>
          <img src={image} />
          <div style={{ display: "flex", flexDirection: "row", height: 60 }}>
            <img
              src="https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/property/69539.jpg"
              style={{ height: 52, marginRight: 10 }}
            />
            <img
              src="https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/property/69540.jpg"
              style={{ height: 52, marginRight: 10 }}
            />
            <img
              src="https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/property/69542.jpg"
              style={{ height: 52, marginRight: 10 }}
            />
            <img
              src={
                "https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/property/120700.jpg"
              }
              style={{ height: 52, marginRight: 10 }}
            />
            <img
              src={
                "https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/property/120702.jpg"
              }
              style={{ height: 52, marginRight: 10 }}
            />
            <img
              src={
                "https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/property/120703.jpg"
              }
              style={{ height: 52, marginRight: 10 }}
            />
          </div>
        </div>
        <div>
          <div
            style={{
              marginTop: 10,
              marginBottom: 10,
              display: "flex",
              flexDirection: "row",
              width: "35%",
            }}
          >
            <p style={{ padding: 20, fontSize: 12, fontFamily: "QuickSand" }}>
              We are just across Frontier Casino; The Green Olive Guesthouse
              offers accommodation in Bethlehem. Each room at this guest house
              is air conditioned and offers a living area equipped with a
              fridge, electric kettle, microwave and flat-screen TV with
              satellite channels. Dihlabeng Shopping Mall is 400 m from The
              Green Olive Guesthouse, while the Hoogland MediClinic is 2 km
              away. The scenic town of Clarens is 36 km from the property. We
              speak your language and offer luxurious accomodation
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                display: "flex",
                color: "black",
                fontSize: 22,
                fontFamily: "Quicksand",
                fontWeight: "600",
                marginLeft: 20,
              }}
            >
              General facilities
            </p>
          </div>
          <div
            style={{
              height: 1,
              backgroundColor: "grey",
              width: "100%",
              marginLeft: 20,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginLeft: 20,
            }}
          >
            <p>24-hour front desk</p>
            <p>Room service</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginLeft: 20,
            }}
          >
            <p>Secured parking</p>
            <p>BBQ / Picnic area</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginLeft: 20,
            }}
          >
            <p>Free parking</p>
            <p>WIFI</p>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                display: "flex",
                color: "black",
                fontSize: 22,
                fontFamily: "Quicksand",
                fontWeight: "600",
                marginLeft: 20,
              }}
            >
              Contact Information
            </p>
          </div>
          <div
            style={{
              height: 1,
              backgroundColor: "grey",
              width: "100%",
              marginLeft: 20,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginLeft: 20,
            }}
          >
            <p>Telephone</p>
            <p>Email</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginLeft: 20,
            }}
          >
            <p>+27-58-3032142</p>
            <p>mdrnoor@gmail.com</p>
          </div>
          <img src="	https://book.nightsbridge.com/assets/images/icon/safe-stay-logo.png"/>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
