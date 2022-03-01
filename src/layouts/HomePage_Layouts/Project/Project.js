import React from "react";
import styles from "./Project.module.css";
import APA_logo from "assets/images/APA-logo.png";

import SecureTrustlogo from "assets/images/SecureTrust.png";
import GuideStarlogo from "assets/images/GuideStar-Platinum.png";
import Charitylogo from "assets/images/Charity-Navigator.jpg";

function Project() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <h1 className="text-center fs-80px mb-50px weight-4">
          A Project for Good
        </h1>

        <div className={styles.container}>
          <div className={styles.left}>
            <img src={APA_logo} className="w-full mb-25px" alt="" />

            <div className={styles.sponsers}>
              <img src={Charitylogo} alt="" />
              <img src={GuideStarlogo} alt="" />
              <img src={SecureTrustlogo} alt="" />
            </div>
          </div>
          <div className={styles.right}>
            <p className="font-cream-shoes fs-34px weight-5 black lh-1">
              We are proud to announce that our very first organization to work
              with is Austin Pets Alive! A truely and strictly no-kill shelter
              that has made Austin, TX the strongest no-kill city in the United
              States. Innovation is in thier blood as they have created
              first-of-their-kind programs that save lives that would otherwise
              be lost. Their track record speaks for itself.{" "}
            </p>

            <div className={styles.stats}>
              <div className="text-center">
                <p className="font-little-paws orange fs-64px mb-10px">
                  90,000+
                </p>
                <p className="font-cream-shoes fs-40px weight-5">
                  lives saved since 2008
                </p>
              </div>
              <div className="text-center">
                <p className="font-little-paws orange fs-64px mb-10px">
                  10,974
                </p>
                <p className="font-cream-shoes fs-40px weight-5">
                  adoptions in 2020
                </p>
              </div>
              <div className="text-center">
                <p className="font-little-paws orange fs-64px mb-10px">
                  13,858
                </p>
                <p className="font-cream-shoes fs-40px weight-5">
                  foster placements in 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
