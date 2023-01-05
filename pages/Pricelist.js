import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Modal from "react-bootstrap/Modal";
import ModalImage from "react-modal-image";
import Image from "next/image";
import image from "../assets/budgetrooms/image3.jpg";
import image2 from "../assets/budgetrooms/image1.jpg";
import image3 from "../assets/budgetrooms/image2.jpg";
import image4 from "../assets/budgetrooms/image4.jpg";
import pqimage1 from "../assets/Queen Room/img1.jpg";
import pqimage2 from "../assets/Queen Room/img2.jpg";
import pqimage3 from "../assets/Queen Room/img3.jpg";
import pqimage4 from "../assets/Queen Room/img4.jpg";
import twinimage1 from "../assets/Premium Twin Room/img1.jpg";
import twinimage2 from "../assets/Premium Twin Room/img2.jpg";
import twinimage3 from "../assets/Premium Twin Room/img3.jpg";
import phimage1 from "../assets/Honeymoon Room/img1.jpg";
import phimage2 from "../assets/Honeymoon Room/img2.jpg";
import phimage3 from "../assets/Honeymoon Room/img3.jpg";
import phimage4 from "../assets/Honeymoon Room/img4.jpg";
import eximage1 from "../assets/Executive Room/img1.jpg";
import eximage2 from "../assets/Executive Room/img2.jpg";
import eximage3 from "../assets/Executive Room/img3.jpg";
import eximage4 from "../assets/Executive Room/img4.jpg";
const Pricelist = () => {
  const [showbudgetroom, setshowbudgetroom] = useState(false);
  const [premiumqueenroom, setpremiumqueenroom] = useState(false);
  const [twinroom, settwinroom] = useState(false);
  const [exroom, setexroom] = useState(false);
  const [phroom, setphroom] = useState(false);
  const [bigimage, setbigimage] = useState(image);
  const [pqbigimage, setpqbigimage] = useState(pqimage1);
  const [ptroom, setptroom] = useState(twinimage1);
  const [phroomimage, setphroomimage] = useState(phimage1);
  const [exroomimage, setexroomimage] = useState(eximage1);
  const handleClose = () => setshowbudgetroom(false);

  return (
    <>
      <Modal
        show={showbudgetroom}
        size="xl"
        centered
        onHide={handleClose}
        animation={false}
      >
        <div className={styles.modalbackground}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: 10,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 18,
                  fontWeight: "700",
                  paddingLeft: 10,
                }}
              >
                Premium Queen Suite
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 18,
                  fontWeight: "700",
                  paddingRight: 10,
                }}
                onClick={() => setshowbudgetroom(false)}
              >
                Close x
              </p>
            </div>
          </div>
          <div className={styles.modaldetail}>
            <div style={{ width: "60%", paddingLeft: 20 }}>
              <Image src={bigimage} className={styles.bigimagestyle} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 10,
                }}
              >
                <Image
                  src={image}
                  className={styles.imagestyle}
                  onClick={() => {
                    setbigimage(image);
                  }}
                />
                <Image
                  src={image2}
                  className={styles.imagestyle}
                  onClick={() => {
                    setbigimage(image2);
                  }}
                />
                <Image
                  src={image3}
                  className={styles.imagestyle}
                  onClick={() => {
                    setbigimage(image3);
                  }}
                />
                <Image
                  src={image4}
                  className={styles.imagestyle}
                  onClick={() => {
                    setbigimage(image4);
                  }}
                />
              </div>
            </div>
            <div className={styles.modaldetail2}>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Room Description
              </p>
              <p style={{ fontFamily: "QuickSand" }}>
                Shower, Mini Bar, AC/Heater, Microwave, Kettle, TV.
              </p>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 20,
                  fontWeight: "700",
                  marginTop: 30,
                }}
              >
                Amenities
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ul>
                  <li style={{ fontFamily: "QuickSand" }}>Wi-Fi</li>
                  <li style={{ fontFamily: "QuickSand" }}>Non-smoking</li>
                  <li style={{ fontFamily: "QuickSand" }}>Sitting area</li>
                  <li style={{ fontFamily: "QuickSand" }}>Air conditioning</li>
                </ul>
                <ul style={{ marginRight: 10 }}>
                  <li style={{ fontFamily: "QuickSand" }}>
                    Bathroom amenities
                  </li>
                  <li style={{ fontFamily: "QuickSand" }}>Shower only</li>
                  <li style={{ fontFamily: "QuickSand" }}>Hairdryer</li>
                  <li style={{ fontFamily: "QuickSand" }}>
                    Coffee / tea facilities
                  </li>
                  <li style={{ fontFamily: "QuickSand" }}>Minibar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        show={premiumqueenroom}
        size="xl"
        centered
        onHide={handleClose}
        animation={false}
      >
        <div className={styles.modalbackground}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: 10,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 18,
                  fontWeight: "700",
                  paddingLeft: 10,
                }}
              >
                Premium Queen Room
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 18,
                  fontWeight: "700",
                  paddingRight: 10,
                }}
                onClick={() => setpremiumqueenroom(false)}
              >
                Close x
              </p>
            </div>
          </div>
          <div className={styles.modaldetail}>
            <div style={{ width: "60%", paddingLeft: 20 }}>
              <Image src={pqbigimage} className={styles.bigimagestyle} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 10,
                }}
              >
                <Image
                  src={pqimage1}
                  className={styles.imagestyle}
                  onClick={() => {
                    setpqbigimage(pqimage1);
                  }}
                />
                <Image
                  src={pqimage2}
                  className={styles.imagestyle}
                  onClick={() => {
                    setpqbigimage(pqimage2);
                  }}
                />
                <Image
                  src={pqimage3}
                  className={styles.imagestyle}
                  onClick={() => {
                    setpqbigimage(pqimage3);
                  }}
                />
                <Image
                  src={pqimage4}
                  className={styles.imagestyle}
                  onClick={() => {
                    setpqbigimage(pqimage4);
                  }}
                />
              </div>
            </div>
            <div className={styles.modaldetail2}>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Room Description
              </p>
              <p style={{ fontFamily: "QuickSand" }}>
                Shower, Mini Bar, AC/Heater, Microwave, Kettle, TV.
              </p>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 20,
                  fontWeight: "700",
                  marginTop: 30,
                }}
              >
                Amenities
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ul>
                  <li style={{ fontFamily: "QuickSand" }}>Wi-Fi</li>
                  <li style={{ fontFamily: "QuickSand" }}>Non-smoking</li>
                  <li style={{ fontFamily: "QuickSand" }}>Sitting area</li>
                  <li style={{ fontFamily: "QuickSand" }}>Air conditioning</li>
                </ul>
                <ul style={{ marginRight: 10 }}>
                  <li style={{ fontFamily: "QuickSand" }}>
                    Bathroom amenities
                  </li>
                  <li style={{ fontFamily: "QuickSand" }}>Shower only</li>
                  <li style={{ fontFamily: "QuickSand" }}>Hairdryer</li>
                  <li style={{ fontFamily: "QuickSand" }}>
                    Coffee / tea facilities
                  </li>
                  <li style={{ fontFamily: "QuickSand" }}>Minibar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        show={twinroom}
        size="xl"
        centered
        onHide={handleClose}
        animation={false}
      >
        <div className={styles.modalbackground}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: 10,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 18,
                  fontWeight: "700",
                  paddingLeft: 10,
                }}
              >
                Premium Twin Room
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 18,
                  fontWeight: "700",
                  paddingRight: 10,
                }}
                onClick={() => {
                  settwinroom(false);
                }}
              >
                Close x
              </p>
            </div>
          </div>
          <div className={styles.modaldetail}>
            <div style={{ width: "60%", paddingLeft: 20 }}>
              <Image src={ptroom} className={styles.bigimagestyle} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 10,
                }}
              >
                <Image
                  src={twinimage1}
                  className={styles.imagestyle}
                  onClick={() => {
                    setptroom(twinimage1);
                  }}
                />
                <Image
                  src={twinimage2}
                  className={styles.imagestyle}
                  onClick={() => {
                    setptroom(twinimage2);
                  }}
                />
                <Image
                  src={twinimage3}
                  className={styles.imagestyle}
                  onClick={() => {
                    setptroom(twinimage3);
                  }}
                />
                <Image
                  src={twinimage1}
                  className={styles.imagestyle}
                  onClick={() => {
                    setptroom(twinimage1);
                  }}
                />
              </div>
            </div>
            <div className={styles.modaldetail2}>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Room Description
              </p>
              <p style={{ fontFamily: "QuickSand" }}>
                Shower, Mini Bar, AC/Heater, Microwave, Kettle, TV.
              </p>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 20,
                  fontWeight: "700",
                  marginTop: 30,
                }}
              >
                Amenities
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ul>
                  <li style={{ fontFamily: "QuickSand" }}>Wi-Fi</li>
                  <li style={{ fontFamily: "QuickSand" }}>Non-smoking</li>
                  <li style={{ fontFamily: "QuickSand" }}>Sitting area</li>
                  <li style={{ fontFamily: "QuickSand" }}>Air conditioning</li>
                </ul>
                <ul style={{ marginRight: 10 }}>
                  <li style={{ fontFamily: "QuickSand" }}>
                    Bathroom amenities
                  </li>
                  <li style={{ fontFamily: "QuickSand" }}>Shower only</li>
                  <li style={{ fontFamily: "QuickSand" }}>Hairdryer</li>
                  <li style={{ fontFamily: "QuickSand" }}>
                    Coffee / tea facilities
                  </li>
                  <li style={{ fontFamily: "QuickSand" }}>Minibar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        show={phroom}
        size="xl"
        centered
        onHide={handleClose}
        animation={false}
      >
        <div className={styles.modalbackground}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: 10,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 18,
                  fontWeight: "700",
                  paddingLeft: 10,
                }}
              >
                Premium Honeymoon Room
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 18,
                  fontWeight: "700",
                  paddingRight: 10,
                }}
                onClick={() => {
                  setphroom(false);
                }}
              >
                Close x
              </p>
            </div>
          </div>
          <div className={styles.modaldetail}>
            <div style={{ width: "60%", paddingLeft: 20 }}>
              <Image src={phroomimage} className={styles.bigimagestyle} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 10,
                }}
              >
                <Image
                  src={phimage1}
                  className={styles.imagestyle}
                  onClick={() => {
                    setphroomimage(phimage1);
                  }}
                />
                <Image
                  src={phimage2}
                  className={styles.imagestyle}
                  onClick={() => {
                    setphroomimage(phimage2);
                  }}
                />
                <Image
                  src={phimage3}
                  className={styles.imagestyle}
                  onClick={() => {
                    setphroomimage(phimage3);
                  }}
                />
                <Image
                  src={phimage4}
                  className={styles.imagestyle}
                  onClick={() => {
                    setphroomimage(phimage4);
                  }}
                />
              </div>
            </div>
            <div className={styles.modaldetail2}>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Room Description
              </p>
              <p style={{ fontFamily: "QuickSand" }}>
                Shower, Mini Bar, AC/Heater, Microwave, Kettle, TV.
              </p>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 20,
                  fontWeight: "700",
                  marginTop: 30,
                }}
              >
                Amenities
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ul>
                  <li style={{ fontFamily: "QuickSand" }}>Wi-Fi</li>
                  <li style={{ fontFamily: "QuickSand" }}>Non-smoking</li>
                  <li style={{ fontFamily: "QuickSand" }}>Sitting area</li>
                  <li style={{ fontFamily: "QuickSand" }}>Air conditioning</li>
                </ul>
                <ul style={{ marginRight: 10 }}>
                  <li style={{ fontFamily: "QuickSand" }}>
                    Bathroom amenities
                  </li>
                  <li style={{ fontFamily: "QuickSand" }}>Shower only</li>
                  <li style={{ fontFamily: "QuickSand" }}>Hairdryer</li>
                  <li style={{ fontFamily: "QuickSand" }}>
                    Coffee / tea facilities
                  </li>
                  <li style={{ fontFamily: "QuickSand" }}>Minibar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        show={exroom}
        size="xl"
        centered
        onHide={handleClose}
        animation={false}
      >
        <div className={styles.modalbackground}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: 10,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 18,
                  fontWeight: "700",
                  paddingLeft: 10,
                }}
              >
                Executive Room
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 18,
                  fontWeight: "700",
                  paddingRight: 10,
                }}
                onClick={() => {
                  setexroom(false);
                }}
              >
                Close x
              </p>
            </div>
          </div>
          <div className={styles.modaldetail}>
            <div style={{ width: "60%", paddingLeft: 20 }}>
              <Image src={exroomimage} className={styles.bigimagestyle} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 10,
                }}
              >
                <Image
                  src={eximage1}
                  className={styles.imagestyle}
                  onClick={() => {
                    setexroomimage(eximage1);
                  }}
                />
                <Image
                  src={eximage2}
                  className={styles.imagestyle}
                  onClick={() => {
                    setexroomimage(eximage2);
                  }}
                />
                <Image
                  src={eximage3}
                  className={styles.imagestyle}
                  onClick={() => {
                    setexroomimage(eximage3);
                  }}
                />
                <Image
                  src={eximage4}
                  className={styles.imagestyle}
                  onClick={() => {
                    setexroomimage(eximage4);
                  }}
                />
              </div>
            </div>
            <div className={styles.modaldetail2}>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Room Description
              </p>
              <p style={{ fontFamily: "QuickSand" }}>
                Shower, Mini Bar, AC/Heater, Microwave, Kettle, TV.
              </p>
              <p
                style={{
                  fontFamily: "QuickSand",
                  fontSize: 20,
                  fontWeight: "700",
                  marginTop: 30,
                }}
              >
                Amenities
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ul>
                  <li style={{ fontFamily: "QuickSand" }}>Wi-Fi</li>
                  <li style={{ fontFamily: "QuickSand" }}>Non-smoking</li>
                  <li style={{ fontFamily: "QuickSand" }}>Sitting area</li>
                  <li style={{ fontFamily: "QuickSand" }}>Air conditioning</li>
                </ul>
                <ul style={{ marginRight: 10 }}>
                  <li style={{ fontFamily: "QuickSand" }}>
                    Bathroom amenities
                  </li>
                  <li style={{ fontFamily: "QuickSand" }}>Shower only</li>
                  <li style={{ fontFamily: "QuickSand" }}>Hairdryer</li>
                  <li style={{ fontFamily: "QuickSand" }}>
                    Coffee / tea facilities
                  </li>
                  <li style={{ fontFamily: "QuickSand" }}>Minibar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className={styles.pricelist}>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <hr className={styles.hr} />
          <p className={styles.hrtext}>Price List</p>
          <hr className={styles.hr} />
        </div>
        <div className={styles.roomcontent}>
          <div>
            <p
              style={{
                fontSize: 28,
                fontFamily: "Quicksand",
                fontWeight: "500",
              }}
            >
              Rooms
            </p>
            <p style={{ fontFamily: "Quicksand" }}>
              See for yourself what makes our rooms second-to-none
            </p>
          </div>
        </div>
        <div className={styles.roomsubcontent}>
          <div className={styles.roomdis}>
            <p
              style={{ fontFamily: "Quicksand", fontSize: 20 }}
              onClick={() => {
                setshowbudgetroom(true);
              }}
            >
              BUDGET ROOM WITH SHARED BATHROOM
            </p>
            <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>450/night +</p>
          </div>
          <p className={styles.roomdisp}>
            {" "}
            Two Single Beds, DSTV, Microwave, Mini Fridge, Elec. Kettle With
            Shared Bathroom
          </p>
          <div className={styles.roomdis}>
            <p
              style={{ fontFamily: "Quicksand", fontSize: 20 }}
              onClick={() => {
                setpremiumqueenroom(true);
              }}
            >
              Premium Queen Room
            </p>
            <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>650/night +</p>
          </div>
          <p className={styles.roomdisp}>
            {" "}
            Extra Length Custom Made Queen bed, DSTV, Mini Fridge, Microwave,
            Electric Kettle
          </p>
          <div className={styles.roomdis}>
            <p
              style={{ fontFamily: "Quicksand", fontSize: 20 }}
              onClick={() => {
                settwinroom(true);
              }}
            >
              Premium Twin Room
            </p>
            <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>650/night +</p>
          </div>
          <p className={styles.roomdisp}>
            {" "}
            Two Single Beds, cable television and all other amenities
          </p>
          <div className={styles.roomdis}>
            <p
              style={{ fontFamily: "Quicksand", fontSize: 20 }}
              onClick={() => {
                setphroom(true);
              }}
            >
              Premium Honeymoon Room
            </p>
            <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>800/night +</p>
          </div>
          <p className={styles.roomdisp}>
            {" "}
            King Sized Bed, Rain Shower, Private Area, Free Standing Bath Tub
          </p>
          <div className={styles.roomdis}>
            <p
              style={{ fontFamily: "Quicksand", fontSize: 20 }}
              onClick={() => {
                setexroom(true);
              }}
            >
              Executive Room
            </p>
            <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
              1000/night +
            </p>
          </div>
          <p className={styles.roomdisp}>
            {" "}
            King Sized Bed, Rain Shower, Private Area, Free Standing BathTub
          </p>
          <div className={styles.roomdis}>
            <p
              style={{ fontFamily: "Quicksand", fontSize: 20 }}
              onClick={() => {
                setexroom(true);
              }}
            >
              Family Room
            </p>
            <p style={{ fontFamily: "Quicksand", fontSize: 20 }}>
              1000/night +
            </p>
          </div>
          <p className={styles.roomdisp}>
            {" "}
            King Sized Bed, Rain Shower, Private Area, Free Standing BathTub
          </p>
        </div>
      </div>
    </>
  );
};

export default Pricelist;
