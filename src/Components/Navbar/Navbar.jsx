import React, { useEffect, useState } from "react";
import Styles from "./Navbar.module.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { TbPhotoHexagon, TbHexagon3D } from "react-icons/tb";
import {LuBoxes} from "react-icons/lu"
import { useNavigate } from "react-router-dom";
import {FaFacebookSquare,FaLinkedin} from "react-icons/fa"
import {AiFillTwitterSquare} from "react-icons/ai"
const Navbar = ({handelq,handelda}) => {
  const [ismobail, setismobail] = useState(false);
  const [query,setquery]=useState("")
  const [bg,setbg]=useState(true)
  const navigate=useNavigate()

  useEffect(()=>{
  
    handelq(query)
    
  },[query])
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 768;
      setismobail(isSmall);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 

    
  
  const handleChangebg1=()=>{
    setbg(true)
    navigate("/")
  }
  const handleChangebg2=()=>{
    setbg(false)
    navigate("/pairs")
  }






  return (
    <>
      <div className={Styles.navbar}>
        <div className={Styles.licicon}>
          {ismobail && (
            <>
              <FaBars onClick={() => setismobail(!ismobail)} />
              nFTIfy
            </>
          )}

          {ismobail || (
            <div className={Styles.sidebar}>
              <div className={Styles.lbody}>
                <TbPhotoHexagon /> nFTIfy
              </div>
              <div className={ bg?Styles.linkspa:Styles.linkspa2} onClick={handleChangebg1} >
               
                <h3> <TbHexagon3D  /> Token Address</h3>
              </div>
              <div
                className={bg?Styles.linkspa2:Styles.linkspa}
                onClick={handleChangebg2}
                
              >
                 <h3><LuBoxes /> Pair Address</h3>
              </div>

              <div className={Styles.socialsicon}>
             < FaFacebookSquare/><FaLinkedin/><AiFillTwitterSquare/>

              </div>
            </div>
          )}
        </div>
        <div className={Styles.serchbarcom}>
          <input type="text" placeholder="Search"  value={query} onChange={(e)=> setquery(e.target.value)}/>
          <FaSearch className={Styles.serchicon} onClick={()=>handelda()}/>
        </div>
        <div className={Styles.connectbutton}>
          <button>Connect</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
