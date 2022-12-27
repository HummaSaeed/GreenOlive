import React,{useEffect} from "react";
import AboutDetail from "./AboutDetail";
import RoomDetail from "./RoomDetail";
import styles from "../styles/Home.module.css";

const Book = () => {
  useEffect(() => {
    const url = "https://www.nightsbridge.com/bridge/api/5.0/availgrid";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [])
  return (
    <div
      style={{
        width: "100%",
        height: 70,
        backgroundColor: "black",
        paddingLeft: 50,
        alignItems: "center",
        marginTop: 0,
        position: "absolute",
        top: 0,
      }}
    >
      <p style={{ fontSize: 22, fontWeight: "600", color: "white" }}>
        The Green Olive Guesthouse
      </p>
      <div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
          <div
            style={{
              backgroundColor: "#f5f4f4",
              height: 70,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              marginRight: 5,
            }}
          >
            <p style={{ fontSize: 15, fontFamily: "Quicksand" }}>
              THUR 15 DEC 2022 - FRI 16 DEC 2022
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f5f4f4",
              height: 70,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              marginRight: 5,
            }}
          >
            <p style={{ fontSize: 15, fontFamily: "Quicksand" }}>1 NIGHT</p>
          </div>
          <div
            style={{
              backgroundColor: "black",
              height: 70,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              marginRight: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: 15,
                fontFamily: "Quicksand",
                color: "white",
                fontWeight: "700",
              }}
            >
              CHECK AVAILABILITY
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f5f4f4",
              height: 70,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              marginRight: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: 15,
                fontFamily: "Quicksand",
                color: "black",
                fontWeight: "700",
              }}
            >
              VIEW CALENDAR
            </p>
          </div>
        </div>
        <RoomDetail
          title={"Premium Queen Suite"}
          description={
            "King size bed, en-suite with bath and shower, Mini Bar, AC/Heater, Microwave, Kettle, TV."
          }
          image={"https://d1zyr4xmqw3mni.cloudfront.net/image/500/gallery/22018/69506.jpg"}
          image1={"https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/69506.jpg"}
          image2={"https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/69509.jpg"}
          image3={"https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/69512.jpg"}
        />
         <RoomDetail
          title={"Budget Twin Rooms Not Ensuite"}
          description={"Twin beds with an external sharing bathroom, Mini Bar, AC/Heater, Microwave, Kettle, TV."}
          image={"https://d1zyr4xmqw3mni.cloudfront.net/image/500/gallery/22018/120696.jpg"}
          image1={"https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/120696.jpg"}
          image2={"https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/120697.jpg"}
          image3={"https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/120698.jpg"}
        />
         <RoomDetail
          title={"Premium Family Room"}
          description={"Premium Family Room featuring an extra length Queen bed and 2 single beds with all the amenities of our Premium Queen Room."}
          image={"https://d1zyr4xmqw3mni.cloudfront.net/image/500/gallery/22018/64688.jpg"}
          image1={"https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/64688.jpg"}
          image2={"https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/64689.jpg"}
          image3={"https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/22018/64690.jpg"}
        />
        <AboutDetail image={"https://d1zyr4xmqw3mni.cloudfront.net/image/500/gallery/22018/property/69539.jpg"}/>
      </div>
      <footer className={styles.footer}>
      
        <div style={{height:100,width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
          <img src="https://book.nightsbridge.com/assets/images/nb_logo_footer.png"/>
        <p style={{fontFamily:'QuickSand',paddingRight:20,paddingLeft:40}}>
        Online booking powered by 
        <span style={{color:'#0ea1df',fontFamily:'QuickSand'}}>NightsBridge</span>
        on behalf of The Green Olive Guesthouse
        </p>
        <p style={{fontFamily:'QuickSand'}}>
          Read our <span style={{color:'#0ea1df',fontFamily:'QuickSand'}}>privacy policy</span>
        </p>
        </div>
      </footer>
    </div>
  );
};

export default Book;
