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
  const [showlarge, setshowlarge] = useState(false);
  const [showlargeimage2, setshowlargeimage2] = useState(false);
  const [showlargeimage3, setshowlargeimage3] = useState(false);
  const [showlargeimage4, setshowlargeimage4] = useState(false);
  const [showlargepqimage1, setshowlargepqimage1] = useState(false);
  const [showlargepqimage2, setshowlargepqimage2] = useState(false);
  const [showlargepqimage3, setshowlargepqimage3] = useState(false);
  const [showlargepqimage4, setshowlargepqimage4] = useState(false);
  const [showlargetwinimage1, setshowlargetwinimage1] = useState(false);
  const [showlargetwinimage2, setshowlargetwinimage2] = useState(false);
  const [showlargetwinimage3, setshowlargetwinimage3] = useState(false);
  const [showlargephimage1, setshowlargephimage1] = useState(false);
  const [showlargephimage2, setshowlargephimage2] = useState(false);
  const [showlargephimage3, setshowlargephimage3] = useState(false);
  const [showlargephimage4, setshowlargephimage4] = useState(false);
  const [showlargeeximage1, setshowlargeeximage1] = useState(false);
  const [showlargeeximage2, setshowlargeeximage2] = useState(false);
  const [showlargeeximage3, setshowlargeeximage3] = useState(false);
  const [showlargeeximage4, setshowlargeeximage4] = useState(false);

  const handleClose = () => setshowbudgetroom(false);
 
  return (
    <>
    <>
    <Modal show={showlarge} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlarge(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargeimage2} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargeimage2(false)}}>X</p>
          <Image src={image2} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargeimage3} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargeimage3(false)}}>X</p>
          <Image src={image3} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargeimage4} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargeimage4(false)}}>X</p>
          <Image src={image4} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargepqimage1} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargepqimage1(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargepqimage2} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargepqimage2(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargepqimage3} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargepqimage3(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargepqimage4} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargepqimage4(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargetwinimage1} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargetwinimage1(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargetwinimage2} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargetwinimage2(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargetwinimage3} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargetwinimage3(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargephimage1} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargephimage1(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargephimage2} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargephimage2(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargephimage3} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargephimage3(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargephimage4} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargephimage4(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargeeximage1} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargeeximage1(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargeeximage2} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargeeximage2(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
   
    <Modal show={showlargeeximage3} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargeeximage3(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    <Modal show={showlargeeximage4} size="xl">
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: 'black',
            height: 650,
          }}
        >
          <p style={{display:'flex',justifyContent:'right',width:'90%',color:'white'}} onClick={()=>{setshowlargeeximage4(false)}}>X</p>
          <Image src={image} style={{width:600,height:600}}/>
          </div>
    </Modal>
    </>
      <Modal
        show={showbudgetroom}
        size="xl"
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
            height: 550,
            overflowX:'scroll',
            overflowY:'scroll'
            
          }}
          
        >
          <div style={{display:'flex',justifyContent:"space-between",width:'100%',padding:10,alignItems:'center'}}>
            <div><p style={{fontFamily:'QuickSand',fontSize:18,fontWeight:'700',paddingLeft:10}}>Premium Queen Suite</p></div>
            <div><p style={{fontFamily:'QuickSand',fontSize:18,fontWeight:'700',paddingRight:10}} onClick={()=>setshowbudgetroom(false)}>Close x</p></div>
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
            <div style={{width:'60%',paddingLeft:20}}>
              <Image src={image} style={{width:650,height:350}}/>
              <div style={{display:"flex",flexDirection:'row',paddingTop:10}}>
              <Image src={image} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlarge(true)}}/>
              <Image src={image2} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlargeimage2(true)}}/>
              <Image src={image3} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlargeimage3(true)}}/>
              <Image src={image4} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlargeimage4(true)}}/>
              </div>
            </div>
            <div style={{width:'40%'}}>
              <p style={{fontFamily:'QuickSand',fontSize:20,fontWeight:'700'}}>Room Description</p>
              <p style={{fontFamily:'QuickSand'}}>Shower, Mini Bar, AC/Heater, Microwave, Kettle, TV.</p>
              <p style={{fontFamily:'QuickSand',fontSize:20,fontWeight:'700',marginTop:30}}>Amenities</p>
           <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             <ul>
            <li style={{fontFamily:'QuickSand'}}>Wi-Fi</li>
             <li style={{fontFamily:'QuickSand'}}>Non-smoking</li>
             <li style={{fontFamily:'QuickSand'}}>Sitting area</li>
             <li style={{fontFamily:'QuickSand'}}>Air conditioning</li></ul>
             <ul style={{marginRight:10}}><li style={{fontFamily:'QuickSand'}}>Bathroom amenities</li>
             <li style={{fontFamily:'QuickSand'}}>Shower only</li>
             <li style={{fontFamily:'QuickSand'}}>Hairdryer</li>
             <li style={{fontFamily:'QuickSand'}}>Coffee / tea facilities</li>
             <li style={{fontFamily:'QuickSand'}}>Minibar</li></ul>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            height: 550,
            overflowY:'scroll',
            overflowX:'scroll'
            
          }}
          
        >
          <div style={{display:'flex',justifyContent:"space-between",width:'100%',padding:10,alignItems:'center'}}>
            <div><p style={{fontFamily:'QuickSand',fontSize:18,fontWeight:'700',paddingLeft:10}}>Premium Queen Room</p></div>
            <div><p style={{fontFamily:'QuickSand',fontSize:18,fontWeight:'700',paddingRight:10}} onClick={()=>setpremiumqueenroom(false)}>Close x</p></div>
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
            <div style={{width:'60%',paddingLeft:20}}>
              <Image src={pqimage1} style={{width:650,height:350}}/>
              <div style={{display:"flex",flexDirection:'row',paddingTop:10}}>
              <Image src={pqimage1} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlargepqimage1(true)}}/>
              <Image src={pqimage2} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlargepqimage2(true)}}/>
              <Image src={pqimage3} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlargepqimage3(true)}}/>
              <Image src={pqimage4} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlargepqimage4(true)}}/>
              </div>
            </div>
            <div style={{width:'40%'}}>
              <p style={{fontFamily:'QuickSand',fontSize:20,fontWeight:'700'}}>Room Description</p>
              <p style={{fontFamily:'QuickSand'}}>Shower, Mini Bar, AC/Heater, Microwave, Kettle, TV.</p>
              <p style={{fontFamily:'QuickSand',fontSize:20,fontWeight:'700',marginTop:30}}>Amenities</p>
           <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             <ul>
            <li style={{fontFamily:'QuickSand'}}>Wi-Fi</li>
             <li style={{fontFamily:'QuickSand'}}>Non-smoking</li>
             <li style={{fontFamily:'QuickSand'}}>Sitting area</li>
             <li style={{fontFamily:'QuickSand'}}>Air conditioning</li></ul>
             <ul style={{marginRight:10}}><li style={{fontFamily:'QuickSand'}}>Bathroom amenities</li>
             <li style={{fontFamily:'QuickSand'}}>Shower only</li>
             <li style={{fontFamily:'QuickSand'}}>Hairdryer</li>
             <li style={{fontFamily:'QuickSand'}}>Coffee / tea facilities</li>
             <li style={{fontFamily:'QuickSand'}}>Minibar</li></ul>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            height: 550,
            overflowX:'scroll',
            overflowY:'scroll'
          }}>
          <div style={{display:'flex',justifyContent:"space-between",width:'100%',padding:10,alignItems:'center'}}>
            <div><p style={{fontFamily:'QuickSand',fontSize:18,fontWeight:'700',paddingLeft:10}}>Premium Twin Room</p></div>
            <div><p style={{fontFamily:'QuickSand',fontSize:18,fontWeight:'700',paddingRight:10}} onClick={()=>{settwinroom(true)}}>Close x</p></div>
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
            <div style={{width:'60%',paddingLeft:20}}>
              <Image src={twinimage1} style={{width:650,height:350}}/>
              <div style={{display:"flex",flexDirection:'row',paddingTop:10}}>
              <Image src={twinimage1} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{ setshowlargetwinimage1(true)}}/>
              <Image src={twinimage2} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{ setshowlargetwinimage2(true)}}/>
              <Image src={twinimage3} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{ setshowlargetwinimage3(true)}}/>
              <Image src={twinimage1} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{ setshowlargetwinimage1(true)}}/>
              </div>
            </div>
            <div style={{width:'40%'}}>
              <p style={{fontFamily:'QuickSand',fontSize:20,fontWeight:'700'}}>Room Description</p>
              <p style={{fontFamily:'QuickSand'}}>Shower, Mini Bar, AC/Heater, Microwave, Kettle, TV.</p>
              <p style={{fontFamily:'QuickSand',fontSize:20,fontWeight:'700',marginTop:30}}>Amenities</p>
           <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             <ul>
            <li style={{fontFamily:'QuickSand'}}>Wi-Fi</li>
             <li style={{fontFamily:'QuickSand'}}>Non-smoking</li>
             <li style={{fontFamily:'QuickSand'}}>Sitting area</li>
             <li style={{fontFamily:'QuickSand'}}>Air conditioning</li></ul>
             <ul style={{marginRight:10}}><li style={{fontFamily:'QuickSand'}}>Bathroom amenities</li>
             <li style={{fontFamily:'QuickSand'}}>Shower only</li>
             <li style={{fontFamily:'QuickSand'}}>Hairdryer</li>
             <li style={{fontFamily:'QuickSand'}}>Coffee / tea facilities</li>
             <li style={{fontFamily:'QuickSand'}}>Minibar</li></ul>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            height: 550,
            overflowX:'scroll'
            
          }} 
        >
          <div style={{display:'flex',justifyContent:"space-between",width:'100%',padding:10,alignItems:'center'}}>
            <div><p style={{fontFamily:'QuickSand',fontSize:18,fontWeight:'700',paddingLeft:10}}>Premium Honeymoon Room</p></div>
            <div><p style={{fontFamily:'QuickSand',fontSize:18,fontWeight:'700',paddingRight:10}} onClick={()=>{setphroom(false)}}>Close x</p></div>
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
            <div style={{width:'60%',paddingLeft:20}}>
              <Image src={phimage1} style={{width:650,height:350}}/>
              <div style={{display:"flex",flexDirection:'row',paddingTop:10}}>
              <Image src={phimage1} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlargephimage1(true)}}/>
              <Image src={phimage2} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlargephimage2(true)}}/>
              <Image src={phimage3} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlargephimage3(true)}}/>
              <Image src={phimage4} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{setshowlargephimage4(true)}}/>
              </div>
            </div>
            <div style={{width:'40%'}}>
              <p style={{fontFamily:'QuickSand',fontSize:20,fontWeight:'700'}}>Room Description</p>
              <p style={{fontFamily:'QuickSand'}}>Shower, Mini Bar, AC/Heater, Microwave, Kettle, TV.</p>
              <p style={{fontFamily:'QuickSand',fontSize:20,fontWeight:'700',marginTop:30}}>Amenities</p>
           <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             <ul>
            <li style={{fontFamily:'QuickSand'}}>Wi-Fi</li>
             <li style={{fontFamily:'QuickSand'}}>Non-smoking</li>
             <li style={{fontFamily:'QuickSand'}}>Sitting area</li>
             <li style={{fontFamily:'QuickSand'}}>Air conditioning</li></ul>
             <ul style={{marginRight:10}}><li style={{fontFamily:'QuickSand'}}>Bathroom amenities</li>
             <li style={{fontFamily:'QuickSand'}}>Shower only</li>
             <li style={{fontFamily:'QuickSand'}}>Hairdryer</li>
             <li style={{fontFamily:'QuickSand'}}>Coffee / tea facilities</li>
             <li style={{fontFamily:'QuickSand'}}>Minibar</li></ul>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            height: 550,
            overflowX:'scroll'
            
          }}
        >
          <div style={{display:'flex',justifyContent:"space-between",width:'100%',padding:10,alignItems:'center'}}>
            <div><p style={{fontFamily:'QuickSand',fontSize:18,fontWeight:'700',paddingLeft:10}}>Executive Room</p></div>
            <div><p style={{fontFamily:'QuickSand',fontSize:18,fontWeight:'700',paddingRight:10}} onClick={()=>{setexroom(false)}}>Close x</p></div>
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
            <div style={{width:'60%',paddingLeft:20}}>
              <Image src={eximage1} style={{width:650,height:350}}/>
              <div style={{display:"flex",flexDirection:'row',paddingTop:10}}>
              <Image src={eximage1} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{ setshowlargeeximage1(true)}}/>
              <Image src={eximage2} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{ setshowlargeeximage2(true)}}/>
              <Image src={eximage3} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{ setshowlargeeximage3(true)}}/>
              <Image src={eximage4} style={{width:180,height:100,marginRight:10,transformOrigin:'center'}} onClick={()=>{ setshowlargeeximage4(true)}}/>
              </div>
            </div>
            <div style={{width:'40%'}}>
              <p style={{fontFamily:'QuickSand',fontSize:20,fontWeight:'700'}}>Room Description</p>
              <p style={{fontFamily:'QuickSand'}}>Shower, Mini Bar, AC/Heater, Microwave, Kettle, TV.</p>
              <p style={{fontFamily:'QuickSand',fontSize:20,fontWeight:'700',marginTop:30}}>Amenities</p>
           <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             <ul>
            <li style={{fontFamily:'QuickSand'}}>Wi-Fi</li>
             <li style={{fontFamily:'QuickSand'}}>Non-smoking</li>
             <li style={{fontFamily:'QuickSand'}}>Sitting area</li>
             <li style={{fontFamily:'QuickSand'}}>Air conditioning</li></ul>
             <ul style={{marginRight:10}}><li style={{fontFamily:'QuickSand'}}>Bathroom amenities</li>
             <li style={{fontFamily:'QuickSand'}}>Shower only</li>
             <li style={{fontFamily:'QuickSand'}}>Hairdryer</li>
             <li style={{fontFamily:'QuickSand'}}>Coffee / tea facilities</li>
             <li style={{fontFamily:'QuickSand'}}>Minibar</li></ul>
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
          <hr className={styles.hr}
          />
          <p className={styles.hrtext}
          >
            Price List
          </p>
          <hr className={styles.hr}
          />
        </div>
        <div className={styles.roomcontent}
        >
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
          <div className={styles.roomdis}
          >
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
          <p className={styles.roomdisp}
          >
            {" "}
            Two Single Beds, DSTV, Microwave, Mini Fridge, Elec. Kettle With
            Shared Bathroom
          </p>
          <div
           className={styles.roomdis}
          >
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
          <p
            className={styles.roomdisp}
          >
            {" "}
            Extra Length Custom Made Queen bed, DSTV, Mini Fridge, Microwave,
            Electric Kettle
          </p>
          <div
            className={styles.roomdis}
          >
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
          <p
           className={styles.roomdisp}
          >
            {" "}
            Two Single Beds, cable television and all other amenities
          </p>
          <div
            className={styles.roomdis}
          >
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
          <p className={styles.roomdisp}
          >
            {" "}
            King Sized Bed, Rain Shower, Private Area, Free Standing Bath Tub
          </p>
          <div
            className={styles.roomdis}
          >
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
          <p className={styles.roomdisp}
          >
            {" "}
            King Sized Bed, Rain Shower, Private Area, Free Standing BathTub
          </p>
          <div
           className={styles.roomdis}
          >
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
