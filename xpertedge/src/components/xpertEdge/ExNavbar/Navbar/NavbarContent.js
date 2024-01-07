import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import dynamic from "next/dynamic";
import { FaChevronDown, FaChevronUp,  } from "react-icons/fa";
const Button = dynamic(() => import("../../../Global/Button/Button"));
const Tabs = dynamic(() => import("../../../Global/Tabs/Tabs"));
// import { menuItem } from "./NavbarData";
import Image from "next/image";
import Link from "next/link";
// import SearchBar from "../../../../pages/search"
import Search from "@/components/xpertEdge/SerachBar/search";
import courseData from "../../../../Data/NavbarData/tabData.json" 


const NavbarContent = ({ adPage, setPopups }) => {
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);

  const handleIcon = (data) => {
    setIcon(data);
  };
  const showMenu = () => {
    setShow(!show);
  };
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, []);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <nav
      className={`${styles.nav} flexBox flexJustSpaceBetween flexAlignCenter`}
    >
    
    <div className={`${styles.left} flexBox flexAlignCenter `}>
        {adPage ? (
          ""
        ) : (
          <>
           
            
          </>
        )}

        {adPage ? (
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/expertEdge/xpertEdgeLogo.webp"
            alt="Learnbay"
            quality={100} 
            loading="lazy"
            priority
            style={{ objectFit: "contain" }}
            width={mobile ? "135" : "230"}
            height={60}
          />
        ) : (
          <Link href="/" className={styles.logo}>
            <div className="imgWrapper ">
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/expertEdge/xpertEdgeLogo.webp"
                alt="Learnbay"
                quality={100}
                loading="lazy"
                priority
                width={mobile ? "135" : "250"}
                height={60}
              />
            </div>
          </Link>
        )}

        <>
          {adPage ? (
            ""
          ) : (
            <div
              onMouseEnter={() => setIcon(true)}
              onMouseOver={() => setIcon(true)}
              onClick={() => {
                setIcon(!icon);
                setShow(false);
              }}
              className="flexBox"
            >
              <Button
              greenButton={true}
                text="Explore"
                passIcon={icon ? <FaChevronUp /> : <FaChevronDown />}
              />
            </div>
          )}
        </>

        {icon ? (
          <div
            className={styles.megaMenu}
            onMouseOver={() => setIcon(true)}
            onMouseLeave={() => setIcon(false)}
          >
            <Tabs handleIcon={handleIcon} />
          </div>
        ) : (
          ""
        )}
      </div>
    

    <Search courseData={courseData} />


  <div>

  </div>

    </nav>
  );
};

export default React.memo(NavbarContent);
