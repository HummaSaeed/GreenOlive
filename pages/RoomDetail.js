import React from "react";

const RoomDetail = ({ title, description, image1, image2, image3, image }) => {
  return (
    <div>
      <div
        style={{
          paddingLeft: 20,
          marginTop: 10,
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          Available on these dates:
        </p>
      </div>
      <div style={{ backgroundColor: "white", zIndex: 1000 }}>
        <p style={{ color: "black", fontWeight: "700", fontSize: 20 }}>
          {title}
        </p>
        <div
          style={{
            height: 400,
            width: "98%",
            boxShadow: "10px 20px 30px #E8E8E8",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "40%" }}>
            <img src={image} />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingBottom: 25,
              paddingLeft: 10,
            }}
          >
            <div>
              <div style={{ paddingLeft: 20, marginTop: 0 }}>
                <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
                  {description}
                </p>
              </div>
              <div
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    width: 120,
                    height: 50,
                    backgroundColor: "grey",
                    marginLeft: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: 16,
                      marginLeft: 10,
                    }}
                  >
                    SHOW MORE
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 20,
                  height: 60,
                }}
              >
                <img src={image1} style={{ marginRight: 20, marginLeft: 20 }} />
                <img src={image2} style={{ marginRight: 20 }} />
                <img src={image3} style={{ marginRight: 20 }} />
              </div>
            </div>

            <p style={{ fontWeight: "600", fontFamily: "Quicksand",height:20}}>
              Max Guests:
              <span style={{ fontWeight: "500", fontFamily: "Quicksand" }}>
                2 (Max 2 adults)
              </span>
            </p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <p
              style={{ fontWeight: "600", fontFamily: "Quicksand", width: 300 }}
            >
              Children: 
              <span style={{ fontWeight: "500", fontFamily: "Quicksand" }}>
                0 - 12 years stay free, 13 - 18 years pay 100% of the sharing
                rate
              </span>
            </p>
            <div
                  style={{
                    width: 110,
                    height: 70,
                    backgroundColor: "black",
                    marginLeft: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight:50
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: 16,
                      marginLeft: 10,
                    }}
                  >
                    VIEW RATES AND MORE
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
