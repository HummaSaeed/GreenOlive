import React from "react";
import styles from "../styles/Home.module.css";

const Pricelist = () => {
  return (
    <div className={styles.pricelist}>
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <hr
          style={{
            backgroundColor: "grey",
            height: 2,
            width: 500,
          }}
        />
        <p style={{ fontSize: 28, fontFamily: "Quicksand", fontWeight: "500" }}>
          Price List
        </p>
        <hr
          style={{
            backgroundColor: "grey",
            height: 2,
            width: 500,
          }}
        />
      </div>
      <div
        style={{
          marginLeft: 150,
          marginRiht: 150,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          <p
            style={{ fontSize: 28, fontFamily: "Quicksand", fontWeight: "500" }}
          >
            Rooms
          </p>
          <p style={{ fontFamily: "Quicksand" }}>
            See for yourself what makes our rooms second-to-none
          </p>
         
          
          
         
        </div>
      </div>
      <div style={{ marginLeft: 150,marginRight: 150}}>
      <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin:0
                
              }}
            >
              <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
                BUDGET ROOM WITH SHARED BATHROOM
              </p>
              <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
                450/night +
              </p>
            </div>
            <p
              style={{
                fontFamily: "Quicksand",
                fontWeight: "600",
                fontSize: 17,
                width:'55%'
              }}
            >
              {" "}
              Two Single Beds, DSTV, Microwave, Mini Fridge, Elec. Kettle With
              Shared Bathroom
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin:0
                
              }}
            >
              <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
              Premium Queen Room
              </p>
              <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
              650/night +
              </p>
            </div>
            <p
              style={{
                fontFamily: "Quicksand",
                fontWeight: "600",
                fontSize: 17,
                width:'55%'
              }}
            >
              {" "}
              Extra Length Custom Made Queen bed, DSTV, Mini Fridge, Microwave, Electric Kettle
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin:0
                
              }}
            >
              <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
              Premium Twin Room
              </p>
              <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
              650/night +
              </p>
            </div>
            <p
              style={{
                fontFamily: "Quicksand",
                fontWeight: "600",
                fontSize: 17,
                width:'55%'
              }}
            >
              {" "}
              Two Single Beds, cable television and all other amenities
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin:0
                
              }}
            >
              <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
              Premium Honeymoon Room
              </p>
              <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
              800/night +
              </p>
            </div>
            <p
              style={{
                fontFamily: "Quicksand",
                fontWeight: "600",
                fontSize: 17,
                width:'55%'
              }}
            >
              {" "}
              King Sized Bed, Rain Shower, Private Area, Free Standing Bath Tub
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin:0
                
              }}
            >
              <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
              Executive Room
              </p>
              <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
              1000/night +
              </p>
            </div>
            <p
              style={{
                fontFamily: "Quicksand",
                fontWeight: "600",
                fontSize: 17,
                width:'55%'
              }}
            >
              {" "}
              King Sized Bed, Rain Shower, Private Area, Free Standing BathTub
            </p>
            </div>

    </div>
  );
};

export default Pricelist;
