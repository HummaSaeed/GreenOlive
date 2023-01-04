import React,{useState} from "react";
import styles from "../styles/Home.module.css";
import { Rating } from 'react-simple-star-rating'
import { FaRegCircle,FaCircle } from "react-icons/fa";
const AboutDetail = ({ image }) => {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (number) => {
    setRating(number)

   
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = ( value,  index) => console.log(value, index)
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
          <hr style={{ marginLeft: 20 }} />
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
          <div style={{ paddingLeft: 20 }}>
            <p
              style={{
                fontFamily: "QuickSand",
                fontSize: 22,
                fontWeight: "800",
              }}
            >
              Guest Reviews
            </p>

            <hr />
            <div style={{ height: 400, overflow: "scroll" }}>
              <div
                style={{
                  backgroundColor: "#e9e8e2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  flexDirection: "row",
                  paddingRight: 10,
                }}
              >
                <p style={{ fontSize: 10, fontFamily: "QuickSand" }}>
                  Traveler Reviews brought to you by
                </p>
                <img
                  src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-23252-2.svg"
                  style={{ height: 28, width: 130, marginLeft: 10 }}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 4 }}
              >
                <img src="https://static.tacdn.com/img2/brand_refresh/ratings/traveler/4.5.svg" />
                <p
                  style={{
                    fontSize: 12,
                    fontFamily: "QuickSand",
                    marginLeft: 5,
                  }}
                >
                  56 Reviews
                </p>
              </div>
              <p style={{ fontFamily: "QuickSand" }}>
                Tripadvisor Traveler Rating:
              </p>
              <hr />
              <div
                style={{ display: "flex",height:25, flexDirection: "row", width: "100%" }}
              >
                <div style={{ width: "50%", paddingTop: 20 }}>
                  <div style={{ display: "flex", flexDirection: "row",display:'flex',alignItems:'center' }}>
                    <p style={{ width: "50%",fontFamily:'QuickSand' }}>Value</p>
                    
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                      size={15}
                      fillColor="#00aa6c"
                      emptyIcon={<FaRegCircle size={20} />}
                      fillIcon={<FaCircle size={20} />}
                      allowFraction={true}
                    />
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  
                </div>
              </div>
              <div
                style={{ display: "flex",height:25, flexDirection: "row", width: "100%" }}
              >
                <div style={{ width: "50%", paddingTop: 20 }}>
                  <div style={{ display: "flex", flexDirection: "row",display:'flex',alignItems:'center' }}>
                    <p style={{ width: "50%",fontFamily:'QuickSand',fontWeight:'500' }}>Rooms</p>
                    
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                      size={15}
                      fillColor="#00aa6c"
                      emptyIcon={<FaRegCircle size={20} />}
                      fillIcon={<FaCircle size={20} />}
                      allowFraction={true}
                    />
                  </div>
                </div>
                <div style={{ width: "50%" }}>

                </div>
              </div>
              <div
                style={{ display: "flex",height:25, flexDirection: "row", width: "100%" }}
              >
                <div style={{ width: "50%", paddingTop: 20 }}>
                  <div style={{ display: "flex", flexDirection: "row",display:'flex',alignItems:'center' }}>
                    <p style={{ width: "50%",fontFamily:'QuickSand',fontWeight:'500'}}>Cleanliness</p>
                    
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                      size={15}
                      fillColor="#00aa6c"
                      emptyIcon={<FaRegCircle size={20} />}
                      fillIcon={<FaCircle size={20} />}
                      allowFraction={true}
                    />
                  </div>
                </div>
                <div style={{ width: "50%" }}></div>
              </div>
              <div
                style={{ display: "flex",height:25, flexDirection: "row", width: "100%" }}
              >
                <div style={{ width: "50%", paddingTop: 20 }}>
                  <div style={{ display: "flex", flexDirection: "row",display:'flex',alignItems:'center' }}>
                    <p style={{ width: "50%",fontFamily:'QuickSand',fontWeight:'500' }}>Service</p>
                    
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                      size={15}
                      fillColor="#00aa6c"
                      emptyIcon={<FaRegCircle size={20} />}
                      fillIcon={<FaCircle size={20} />}
                      allowFraction={true}
                    />
                  </div>
                </div>
                <div style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>
          <img src="	https://book.nightsbridge.com/assets/images/icon/safe-stay-logo.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
