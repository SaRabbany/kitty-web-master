import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { FaTwitter, FaDiscord, FaTwitch } from "react-icons/fa";
import opensea_icon from "assets/images/opensea-icon.svg";

import { Link as ScrollLink } from "react-scroll";
import useMediaQuery from "hooks/useMediaQuery";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  const isBellow1000 = useMediaQuery("(max-width:1000px)");
  const isBellow450 = useMediaQuery("(max-width:450px)");
  const menuRef = OutsideClickDetector(() => {
    setShow(false);
  });

  return (
    <div className={styles.navbarWrapper}>
      <div className={`black-screen ${show ? "show" : ""}`}></div>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div>
            <Link to="/" className="flex">
              <img src={logo} className={`${styles.logo} w-full`} alt="" />
            </Link>
          </div>
          <div
            className={`${styles.links} ${show ? styles.show : ""}`}
            ref={menuRef}
          >
            <ScrollLink
              onClick={() => setShow(false)}
              offset={-30}
              to="about"
              className="font-winter-soraya-wrapper flex w-fit-content pointer"
            >
              <p className="font-winter-soraya fs-72px white">About</p>
            </ScrollLink>
            <ScrollLink
              onClick={() => setShow(false)}
              offset={-30}
              to="roadmap"
              className="font-winter-soraya-wrapper flex w-fit-content pointer"
            >
              <p className="font-winter-soraya fs-72px white">Roadmap</p>
            </ScrollLink>
            <ScrollLink
              onClick={() => setShow(false)}
              offset={-30}
              to="team"
              className="font-winter-soraya-wrapper flex w-fit-content pointer"
            >
              <p className="font-winter-soraya fs-72px white">Team</p>
            </ScrollLink>
            <ScrollLink
              onClick={() => setShow(false)}
              offset={-30}
              to="faq"
              className="font-winter-soraya-wrapper flex w-fit-content pointer"
            >
              <p className="font-winter-soraya fs-72px white">FAQ</p>
            </ScrollLink>
            <ScrollLink
              onClick={() => setShow(false)}
              offset={-30}
              to="story"
              className="font-winter-soraya-wrapper flex w-fit-content pointer"
            >
              <p className="font-winter-soraya fs-72px white">Story</p>
            </ScrollLink>

            <button className={styles.closeBtn} onClick={() => setShow(false)}>
              <GrFormClose size={35} />
            </button>

            <div className={styles.mobileSocialLinks}>
              <a
                onClick={() => setShow(false)}
                href="https://twitter.com/KittenClubNFT"
                target="_blank"
                rel="noreferrer"
                className="black flex"
              >
                <FaTwitter size={35} />
              </a>
              <a onClick={() => setShow(false)} href="#" className="black flex">
                <FaDiscord size={40} />
              </a>
              <a onClick={() => setShow(false)} href="#" className="black flex">
                <img src={opensea_icon} style={{ width: "35px" }} alt="" />
              </a>
              <a
                onClick={() => setShow(false)}
                href="https://www.twitch.tv/kittenclubhousenft"
                target="_blank"
                rel="noreferrer"
                className="black flex"
              >
                <FaTwitch size={30} />
              </a>
            </div>
          </div>
          <div className={styles.socialLinks}>
            {isBellow450 ? (
              ""
            ) : (
              <>
                <a
                  href="https://twitter.com/KittenClubNFT"
                  target="_blank"
                  rel="noreferrer"
                  className="white flex"
                >
                  <FaTwitter size={isBellow1000 ? 25 : 30} />
                </a>
                <a href="#" className="white flex">
                  <FaDiscord size={isBellow1000 ? 30 : 35} />
                </a>
                <a href="#" className="white flex">
                  <img
                    src={opensea_icon}
                    style={{ width: isBellow1000 ? "25px" : "30px" }}
                    alt=""
                  />
                </a>
                <a
                  href="https://www.twitch.tv/kittenclubhousenft"
                  target="_blank"
                  rel="noreferrer"
                  className="white flex"
                >
                  <FaTwitch size={isBellow1000 ? 25 : 25} />
                </a>
              </>
            )}

            <button
              className={`${styles.hamburger} pointer white`}
              onClick={() => setShow(true)}
            >
              <GiHamburgerMenu size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
