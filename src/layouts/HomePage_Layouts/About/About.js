import React from "react";
import styles from "./About.module.css";
import kittens from "assets/images/kittens.png";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className="white fs-66px weight-4 mb-20px">
              What is <br /> Kitten Clubhouse?
            </h1>

            <p className="font-cream-shoes fs-40px weight-5 white lh-1">
              Welcome to Kitten Clubhouse, a community-driven project for real
              good. Not your average cat NFT. Each of the uniquely generated
              10,000 kittens are not only the cutest on the ETH blockchain, but
              serve as your ticket into a community built to innovative
              lifesaving programs designed to save animals most at risk of
              euthanasia, and to help get you started with your own
              contributions and projects on web3. But the kittens aren’t
              stopping there...
            </p>
          </div>
          <div className={styles.right}>
            <img src={kittens} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
