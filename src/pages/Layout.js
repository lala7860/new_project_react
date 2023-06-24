import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import logo from './images/pinfo4.PNG';
import './layout.css';
import 'remixicon/fonts/remixicon.css';
import pic from './images/pic.png'
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import {motion} from 'framer-motion';
// import {appendScript} from '../script/mountingScript';

function Layout(){
  // appendScript("../script/layoutscript.js");

  
  const [open, setOpen] = useState(true);
  //for collapsing slidebar
  const handletoggle = ()=>{
    setOpen(!open)
  }

  const sideContainerVariants ={
    true:{
      width: '15rem'

    },
    false:{
      transition:{
        delay: 0.6
      }
    }
  }

    return (
     
   
      <div className="layout-main">
       <header>
       <div className="img1">
        <img  src={logo} alt="no pic" />
        
        </div>
         
         <div className="profile_img">
          <img src={pic} alt ="no pic2"/>
        
          <div className="nam">
         <h2>Mohd Nouman</h2>
         </div>
         </div>
         
        
       </header>
       
          <div className="mdlbtm">
            <motion.div 
            data-open = {open}
            variants={sideContainerVariants}
            initial ={'${open}'}
            animate = {'${open}'}
            
            className="nav-main">
              {/* <input type="checkbox" id="btnControl" ></input> */}
              <motion.div 
              whileHover={{
                scale:1.2, 
                rotate:180,
                backgroundcolor:"rgba(255,255,255,0.3)", 
                backdropfilter:"blur(3.5px)",
                WebkitBackdropFilter:"blur(3.5px)111",
                border:"1px solid rgba(255,255,255,0.3",
                transition:{
                  delay:0.2,
                  duration: 0.4
                }
              }}
              onClick={handletoggle}
              className="line_icon" type ="checkbox">
                <TocRoundedIcon/>
                </motion.div>
              <label htmlFor="btnControl" className="ri-menu-line"></label>
              <nav>
                {/* <Link to="/" title="Home"><i className="icon ri-home-4-line"></i> <span className="icon-text">Home</span></Link> */}
                <Link to="/" className="nav-a"><i className="icon ri-home-4-line"></i> <span className="icon-text">Home</span></Link>
                <Link to="/usagematrix" className="nav-a"><span className="icon-text">Usage matrix</span></Link>
                
                <div className="nav-a"><i className="icon ri-flight-takeoff-line"></i> <span className="icon-text">Flight</span></div>
                <div className="nav-a"><i className="icon ri-money-dollar-circle-line"></i> <span className="icon-text">Sales</span></div>
                <div className="nav-a"><i className="icon ri-money-euro-circle-line"></i> <span className="icon-text">Finance</span></div>
                <div className="nav-a"><i className="icon ri-user-settings-line"></i> <span className="icon-text">Admin</span></div>
                <div className="nav-a"><i className="icon ri-customer-service-line"></i> <span className="icon-text">Util</span></div>
              </nav>
              <div className="sub-nav"></div>
            </motion.div>
            <div className="preview">
              { <Outlet /> }
            </div>
          </div>
       
        <footer>
          <div className="f-left">
            <p>Group Name: <span><b>Pinfo_security_sk</b></span></p>
          </div>
          <div className="f-middle">
            <p>--</p>
          </div>
          <div className="f-right">
            <p>Version 1.0 <b>Powered by SAS</b></p>
          </div>
        </footer>
      </div>
    );
  }


export default Layout;