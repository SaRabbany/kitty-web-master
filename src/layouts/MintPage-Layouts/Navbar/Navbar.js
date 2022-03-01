import React from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import useMediaQuery from "hooks/useMediaQuery";
import { HiLink } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const isBellow760px = useMediaQuery("(max-width : 760px)");
  const isBellow600px = useMediaQuery("(max-width : 600px)");
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div className={styles.socialLinks}>
            <a
              className="white flex"
              href="https://twitter.com/KittenClubNFT"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={isBellow760px ? 30 : 40} />
            </a>
            <a href="#" className="white flex">
              <FaDiscord size={isBellow760px ? 30 : 45} />
            </a>
          </div>
          <div className={styles.center}>
            <Link to="/" className="flex">
              <img src={logo} className={styles.logo} alt="" />
            </Link>
          </div>
          <div className={styles.btns}>
            <button
              className={`${styles.walletBtn} fs-26px weight-4 black pointer`}
            >
              {isBellow600px ? <HiLink /> : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
