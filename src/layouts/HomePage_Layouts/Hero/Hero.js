import React from "react";
import styles from "./Hero.module.css";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import hero_kitty from "assets/images/Pawing-kitten.gif";

function Hero() {
  const isBellow1000 = useMediaQuery("(max-width:1000px)");

  return (
    <div className={styles.container}>
      
      <div className="container-wrapper">
        <div className={styles.wrapper} >
          <div className={styles.content} >
            <div className="mb-40px">
              <h1 className=" weight-4 mb-20px">
                Unleash...the kittens
              </h1>
            <p className="font-cream-shoes fs-30px weight-5 lh-1 text-justify hero-content"  >
            The kittens are about to storm the blockchain! End of March we open access to the Kitten Clubhouse. Join the kittens and enjoy the benefits of being a part of the community! 10k NFTs, 0.08 ETH each...yup, it’s time to grab the catnip.
              </p>
            </div>

            <div className={styles.btns}>
              <button className="button-pink  weight-4 pointer radius-26px lh-1">
                <span className="flex">
                  <FaDiscord size={isBellow1000 ? 24 : 32} />
                </span>
                <div className="font-calli-cat-wrapper">
                  <p className="font-calli-cat">Discord</p>
                </div>
              </button>
              <Link
                to="/mint"
                className="button-blue weight-4 pointer radius-26px black  " style={{ 'padding':'0 40px' }}
              >
                <div className="font-calli-cat-wrapper">
                  <p className="font-calli-cat">Mint</p>
                </div>
              </Link>
            </div>
          </div>

          <img src={hero_kitty} className={styles.hero_kitty} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
