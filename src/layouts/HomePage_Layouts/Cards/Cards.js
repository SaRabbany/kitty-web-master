import React from "react";
import styles from "./Cards.module.css";

import Merchlogo from "assets/images/Merch-Logo.png";
import Tourneyslogo from "assets/images/Tourneys-Logo.png";
import Charitylogo from "assets/images/Charity-logo.png";
import Alphalogo from "assets/images/Alpha-Logo.png";
import useMediaQuery from "hooks/useMediaQuery";

const Card = ({ title, img, desc, descFontSize = "fs-36px" }) => {
  const isBellow760px = useMediaQuery("(max-width : 760px)");

  return (
    <div className="text-center">
      <h1 className="text-center fs-46px black weight-4 mb-30px">{title}</h1>
      <img
        src={img}
        style={{
          width: "100%",
          maxWidth: isBellow760px ? "100px" : "150px",
          height: isBellow760px ? "100px" : "150px",
          objectFit: "contain",
        }}
        className="mb-20px"
        alt=""
      />
      <p className={`text-center ${descFontSize} weight-5 font-cream-shoes`}>
        {desc}
      </p>
    </div>
  );
};

function Cards() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <div className={styles.cards}>
          <Card
            title="Charity"
            img={Charitylogo}
            desc="Voting rights in our very own decentralized charity goverance system. For the kittens!"
          />
          <Card
            title="Tourneys"
            img={Tourneyslogo}
            desc="Be able to participate in community-wide Twitch streamed gaming touneys with tasty eth prizes. Real tasty."
          />
          <Card
            title="Merch"
            img={Merchlogo}
            desc="Access to exclusive merch. Merch that’s actually cool. Some unique to your Kitten Clubhouse NFTs...we’ll explain later."
          />
          <Card
            title="Alpha"
            img={Alphalogo}
            desc="Your ticket into a community built to help each other innovate and build their own projects on web3, and to also help guide each other through the NFT/crypto journey.. Everyone eats."
            descFontSize="fs-28px"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
